const api = require("../src/utils/api");
const { getAllProject, getFeatureProject, getSpecificProject } = api;

describe("Unit test for utils/api.js ", () => {
  describe("Function getAllProject", () => {
    it("should return correct object", async done => {
      const data = await getAllProject();
      expect(data).toHaveProperty("hasNext", true);
      expect(data).toHaveProperty("projectArr");
      expect(data.projectArr).toStrictEqual(expect.any(Array));
      done();
    }, 10000);
    // need to put in long delay time due to API take a while to answer
  });

  describe("Funtion getFeatureProject", () => {
    it("should have projects property", async done => {
      const data = await getFeatureProject();
      expect(data).toHaveProperty("hasNext", false);
      expect(data).toHaveProperty("projectArr");
      expect(data.projectArr).toStrictEqual(expect.any(Array));
      done();
    }, 5000);
  });

  describe("Function getSpecificProject", () => {
    it("should have project property", async done => {
      await expect(getSpecificProject(1883)).resolves.toHaveProperty(
        "projectId",
        expect.any(Number)
      );
      done();
    }, 5000);
  });
});
