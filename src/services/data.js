const BASE_URL = process.env.REACT_APP_BASE_URL;
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

export async function getMovie(id) {
  try {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${KEY}`,
        'X-RapidAPI-Host': `${HOST}`,
      },
    };
    const result = await fetch(`${BASE_URL}${id}`, options);
    return result.json();
  } catch (error) {
    return new Error(error);
  }
}
