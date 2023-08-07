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

export const getPhoto = async (id) => {
  try {
    const response = await api.get(`/photo/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to get photo - error: ${error}`);
    throw error;
  }
};

export const createPhoto = async (photoData) => {
  try {
    const response = await api.post("/photo", photoData);
    return response.data;
  } catch (error) {
    console.error(`Failed to get photo - error: ${error}`);
    throw error;
  }
}