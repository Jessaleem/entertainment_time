const BASE_URL = process.env.REACT_APP_BASE_URL;
const DESCRIPTION_URL = process.env.REACT_APP_SINOPSIS;

export async function getAllData() {
  try {
    const result = await fetch(`${BASE_URL}`);
    return result.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function getDescription(id) {
  try {
    const result = await fetch(`${DESCRIPTION_URL}${id}`);
    return result.json();
  } catch (error) {
    return new Error(error);
  }
}
