import api from "./apiConfig.js";

export const getPhotos = async () => {
  try {
    const response = await api.get("/photo");
    return response.data;
  } catch (error) {
    console.error(`Failed to get photos - error: ${error}`);
    throw error;
  }
};

