const router = require("express").Router();
const api = require("../utils/api");

const { getAllProject, getFeatureProject, getSpecificProject } = api;

router.get("/api/project/all", async (req, res) => {
  //get all route
  try {
    const result = await getAllProject();
    res.json(result);
  } catch (error) {
    res.json({ Error: error });
  }
});

router.get("/api/project/feature", async (req, res) => {
  try {
    const result = await getFeatureProject();
    res.json(result);
  } catch (error) {
    res.json({ Error: error });
  }
});

router.get("/api/project:projectId", async (req, res) => {
  //get specific route
  try {
    const result = await getSpecificProject(req.params.projectId);
    res.json(result);
  } catch (error) {
    res.json({ Error: error });
  }
});

router.get("/api/test", async (req, res) => {
  res.json({ Message: "Connect successfully" });
});

module.exports = router;
