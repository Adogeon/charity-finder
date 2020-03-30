const api = require("../src/utils/api");
const { getAllProject, getFeatureProject, getSpecificProject } = api;

describe("Unit test for utils/api.js ", () => {
  describe("Function getAllProject", () => {
    it("should have hasNext property", async done => {
      await expect(getAllProject()).resolves.toHaveProperty("projects");
      done();
    },1000000);
  });
});
