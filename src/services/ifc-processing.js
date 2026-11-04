import * as THREE from "three";
import { GLTFExporter } from "three/addons/exporters/GLTFExporter.js";
import { GeometryProcessor } from "@ifc-lite/geometry";
import {
  geometryClassOf,
  isPlacedGeometryClass,
} from "@ifc-lite/geometry/geometry-class";

export async function processIfcFile(file, onProgress = () => {}) {
  if (!(file instanceof Blob) || file.size === 0) {
    throw new Error("O ficheiro IFC está vazio ou não é válido.");
  }

  const buffer = new Uint8Array(await file.arrayBuffer());
  onProgress("A iniciar o processador IFC…");

  const processor = new GeometryProcessor({ enableInstancing: false });
  await processor.init();

  const meshes = [];
  for await (const event of processor.processAdaptive(buffer)) {
    if (event.type === "batch") {
      meshes.push(...filterRenderableMeshes(event.meshes));
      onProgress(`A processar geometria: ${meshes.length} partes…`);
    } else if (event.type === "progress") {
      onProgress(
        event.phase === "prepass"
          ? "A analisar a estrutura IFC…"
          : "A gerar geometria 3D…",
      );
    }
  }

  if (meshes.length === 0) {
    throw new Error("O IFC não contém elementos com geometria 3D compatível.");
  }

  onProgress("A preparar o modelo 3D…");
  const scene = createScene(meshes);
  const glb = await new GLTFExporter().parseAsync(scene, { binary: true });
  if (!(glb instanceof ArrayBuffer) || glb.byteLength === 0) {
    throw new Error("Não foi possível gerar o modelo GLB.");
  }

  return {
    modelBlob: new Blob([glb], { type: "model/gltf-binary" }),
    elementCount: new Set(meshes.map(({ expressId }) => expressId)).size,
  };
}

export function filterRenderableMeshes(meshes) {
  return meshes.filter((mesh) =>
    isPlacedGeometryClass(geometryClassOf(mesh)),
  );
}

function createScene(meshes) {
  const scene = new THREE.Scene();
  for (const data of meshes) {
    if (
      data.positions.length === 0 ||
      data.positions.length % 3 !== 0 ||
      data.normals.length !== data.positions.length ||
      data.indices.length === 0 ||
      !Number.isInteger(data.expressId)
    ) {
      throw new Error(`A geometria do elemento IFC ${data.expressId} é inválida.`);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(data.positions, 3),
    );
    geometry.setAttribute("normal", new THREE.BufferAttribute(data.normals, 3));
    geometry.setIndex(new THREE.BufferAttribute(data.indices, 1));
    if (data.uvs) {
      geometry.setAttribute("uv", new THREE.BufferAttribute(data.uvs, 2));
    }

    const [red, green, blue, alpha] = data.color;
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(red, green, blue),
      transparent: alpha < 1,
      opacity: alpha,
      side: THREE.DoubleSide,
      depthWrite: alpha >= 1,
    });
    material.name = `ifc-element-${data.expressId}`;

    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = `IFC ${data.ifcType || "element"} ${data.expressId}`;
    mesh.userData.expressId = data.expressId;
    mesh.userData.ifcType = data.ifcType || "";
    if (data.origin) mesh.position.fromArray(data.origin);
    scene.add(mesh);
  }
  return scene;
}
