const axios = require('axios');

const apikey = process.env.API_KEY || process.env.API_DEV_KEY;

const getMovieData = async (param, value) => {
    let movieData = undefined;
    await axios.get(`http://www.omdbapi.com/?${param}=${value}&apikey=${apikey}`).then((response) => movieData = response.data);
    return movieData;
};

module.exports = {
    getMovieData
}