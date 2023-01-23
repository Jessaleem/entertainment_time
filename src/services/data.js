const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getAllData() {
  try {
    const response = await fetch(`${BASE_URL}`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}
