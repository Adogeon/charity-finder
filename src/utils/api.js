export const getFeatureProject = async () => {
  try {
    const response = await fetch("/api/project/feature");
    const data = await response.data;
    return data;
  } catch (error) {
    return { Error: error };
  }
};

export const getAllProject = async () => {
  try {
    const response = await fetch("/api/project/all");
    const data = await response.data;
    return data;
  } catch (error) {
    return { Error: error };
  }
};

export const getProjectById = async id => {
  try {
    const response = await fetch(`/api/project/${id}`);
    const data = await response.data;
    return data;
  } catch (error) {
    return { Error: error };
  }
};
