import axios from "axios";

const BASE_URL = "https://www.themuse.com/api/public"

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getMuseJobs(page: number = 1,) {
  try {
    const response = await instance.get('/jobs', {
      params: {
        api_key: process.env.THE_MUSE_API_KEY,
        category: "Software Engineering",
        level: "Internship",
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error("error:", error);
    throw error;
  }
}
