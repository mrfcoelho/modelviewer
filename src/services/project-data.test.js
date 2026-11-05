import assert from "node:assert/strict";
import test from "node:test";
import { validateProjects } from "./project-data.js";

const validProject = {
  id: "1",
  name: "Projeto de demonstração",
  status: "submitted",
  coords: [41.45, -8.28],
  modelUrl: "models/demo.glb",
};

test("validates and normalizes project records", () => {
  const [project] = validateProjects([{ ...validProject, name: "  Projeto  " }]);

  assert.equal(project.name, "Projeto");
  assert.equal(project.status, "submitted");
  assert.deepEqual(project.coords, [41.45, -8.28]);
});

test("accepts a submitted local project without a published model path", () => {
  const [project] = validateProjects([
    { ...validProject, id: "local-demo", modelUrl: null },
  ]);

  assert.equal(project.modelUrl, null);
});

test("validates and keeps an optional IFC path for published projects", () => {
  const [project] = validateProjects([
    { ...validProject, ifcUrl: "models/demo.ifc" },
  ]);

  assert.equal(project.ifcUrl, "models/demo.ifc");
});

test("rejects unknown statuses", () => {
  assert.throws(
    () => validateProjects([{ ...validProject, status: "pending" }]),
    /Dados inválidos/,
  );
});

test("rejects invalid coordinates and model paths", () => {
  assert.throws(
    () => validateProjects([{ ...validProject, coords: [91, 0] }]),
    /Dados inválidos/,
  );
  assert.throws(
    () => validateProjects([{ ...validProject, modelUrl: "models/../private.glb" }]),
    /Dados inválidos/,
  );
  assert.throws(
    () =>
      validateProjects([
        { ...validProject, ifcUrl: "models/../private.ifc" },
      ]),
    /Dados inválidos/,
  );
});
