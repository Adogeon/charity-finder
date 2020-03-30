const api = require("../src/utils/api");
const { getAllProject, getFeatureProject, getSpecificProject } = api;

describe("Unit test for utils/api.js ", () => {
  describe("Function getAllProject", async () => {
    const data = await getAllProject();
    it("should have hasNext property", () => {
      expect(data).toHaveProperty("hasNext");
    });
  });
});
