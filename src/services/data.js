const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getAllData() {
  try {
    const result = await fetch(`${BASE_URL}`);
    return result.json();
  } catch (error) {
    return new Error(error);
  }
}
