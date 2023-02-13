const BASE_URL = process.env.REACT_APP_BASE_URL;
const DESCRIPTION_URL = process.env.REACT_APP_SINOPSIS;
const KEY = process.env.REACT_APP_API_KEY;
const HOST = process.env.REACT_APP_RAPIDAPI_HOST;

export async function getAllData() {
  try {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${KEY}`,
        'X-RapidAPI-Host': `${HOST}`,
      },
    };
    const result = await fetch(`${BASE_URL}`, options);
    return await result.json();
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
