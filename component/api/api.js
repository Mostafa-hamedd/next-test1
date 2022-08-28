
const API_URL = 'https://walima-api.herokuapp.com';

const getData = async (page) => {
    const response = await fetch(`${API_URL}/${page}`)
    return response.json()
  }
 

export {getData,API_URL};