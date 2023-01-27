const BASE_URL = process.env.REACT_APP_BASE_URL;
const DESCRIPTION_URL = process.env.REACT_APP_SINOPSIS;

export async function getAllData() {
  try {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '255b9ad33dmshf980c563c565a35p11ac4cjsn6a0e3ae00e7a',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
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
