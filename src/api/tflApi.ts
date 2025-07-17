import axios from "axios";
import type { Line } from "../types";

const TFL_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const TFL_APP_KEY = import.meta.env.VITE_API_KEY;

const apiClient = axios.create({
  baseURL: TFL_API_BASE_URL,
  params: {
    app_key: TFL_APP_KEY,
  },
});

export const getTubeLineStatuses = async (): Promise<Line[]> => {
  try {
    const response = await apiClient.get("/Line/Mode/tube/Status");
    return response.data;
  } catch (error) {
    console.error("Error fetching TFL line statuses:", error);
    throw error;
  }
};
