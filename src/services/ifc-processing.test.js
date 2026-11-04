import assert from "node:assert/strict";
import test from "node:test";
import { filterRenderableMeshes } from "./ifc-processing.js";

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
