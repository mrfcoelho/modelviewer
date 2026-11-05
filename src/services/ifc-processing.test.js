import assert from "node:assert/strict";
import test from "node:test";
import {
  filterRenderableMeshes,
  getFloorMeshSets,
} from "./ifc-processing.js";

test("keeps placed IFC geometry and excludes type-library geometry", () => {
  const meshes = [
    { expressId: 1, geometryClass: 0 },
    { expressId: 2, geometryClass: 1 },
    { expressId: 3, geometryClass: 2 },
    { expressId: 4, geometryClass: 3 },
    { expressId: 5 },
  ];

  assert.deepEqual(
    filterRenderableMeshes(meshes).map(({ expressId }) => expressId),
    [1, 4, 5],
  );
});

test("builds floor models with the selected floor and every floor above", () => {
  const meshes = [
    { expressId: 10 },
    { expressId: 20 },
    { expressId: 30 },
    { expressId: 101 },
  ];
  const storeys = new Map([
    [300, [30]],
    [100, [10]],
    [200, [20]],
  ]);
  const storeyNames = new Map([
    [100, "Piso 0"],
    [200, "Piso 1"],
    [300, "Piso 2"],
  ]);
  const store = {
    spatialHierarchy: {
      byStorey: storeys,
      elementToStorey: new Map([
        [10, 100],
        [20, 200],
        [30, 300],
      ]),
      storeyElevations: new Map([
        [100, 0],
        [200, 3],
        [300, 6],
      ]),
    },
    entities: {
      getTypeName: (id) => (storeys.has(id) ? "IfcBuildingStorey" : ""),
      getName: (id) => storeyNames.get(id),
    },
    getEntitiesByType: () => [
      { attributes: [null, null, null, null, 20, 101] },
    ],
  };

  const floors = getFloorMeshSets(meshes, store);

  assert.deepEqual(
    floors.map(({ key, name, elevation, meshes: floorMeshes }) => ({
      key,
      name,
      elevation,
      ids: floorMeshes.map(({ expressId }) => expressId),
    })),
    [
      { key: "floor-0", name: "Piso 0", elevation: 0, ids: [10, 20, 30, 101] },
      { key: "floor-1", name: "Piso 1", elevation: 3, ids: [20, 30, 101] },
      { key: "floor-2", name: "Piso 2", elevation: 6, ids: [30] },
    ],
  );
});

test("rejects geometry that cannot be associated with an IFC storey", () => {
  const store = {
    spatialHierarchy: {
      byStorey: new Map([[100, []]]),
      elementToStorey: new Map(),
      storeyElevations: new Map([[100, 0]]),
    },
    entities: {
      getTypeName: () => "IfcBuildingStorey",
      getName: () => "Piso 0",
    },
    getEntitiesByType: () => [],
  };

  assert.throws(
    () => getFloorMeshSets([{ expressId: 42 }], store),
    /associar 1 elemento\(s\) IFC a um piso: 42/,
  );
});
