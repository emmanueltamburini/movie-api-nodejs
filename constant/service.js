const URL_YEAR = (year) => year ? `&y=${year}` : '';
const TRUE = "True";
const OMDB_API = (title, year, apikey) => `http://www.omdbapi.com/?t=${title}${URL_YEAR(year)}&apikey=${apikey}`;


module.exports = {URL_YEAR, OMDB_API, TRUE}