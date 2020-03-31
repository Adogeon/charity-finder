require("dotenv").config();

const axios = require("axios");
const BASE_URL = "https://api.globalgiving.org/api";
const API_STRING = `api_key=${process.env.API_KEY}`;

const fetchData = async pathString => {
  try {
    const response = await axios.get(`${BASE_URL}${pathString}${API_STRING}`, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error when fetch all data: ${error}`);
  }
};

const parser = require("./parser.js");

const PROJECT_PATH = "/public/projectservice";
const GET_FEATURE_PROJECT_SUM_PATH = "/featured/projects/summary";
const GET_ALL_PROJECT_SUM_PATH = "/all/projects/active/summary";

module.exports.getAllProject = async () => {
  try {
    const result = await fetchData(
      `${PROJECT_PATH}${GET_ALL_PROJECT_SUM_PATH}?`
    );
    return parser.run(result);
  } catch (error) {
    console.log("Error when fetching all Project:" + error);
  }
};

module.exports.getFeatureProject = async () => {
  try {
    const result = await fetchData(
      `${PROJECT_PATH}${GET_FEATURE_PROJECT_SUM_PATH}?`
    );
    return parser.run(result);
  } catch (error) {
    console.log("Error when fetching featured project:" + error);
  }
};

module.exports.getSpecificProject = async id => {
  try {
    const result = await fetchData(`${PROJECT_PATH}/projects/${id}/summary?`);
    return parser.run(result);
  } catch (error) {
    console.log(`Error when fetching project ${id}: ${error}`);
  }
};
