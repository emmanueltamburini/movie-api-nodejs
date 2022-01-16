const MOVIE_NOT_FOUND = 'Movie has not been found';
const MONGO_DB_CONNECTION = "MongoDB database connection established successfully";
const MONGO_DB_CONNECTION_TRYING = (uri) => `Trying to connect to ${uri} ...`;

const NUMBER_BASE_TEXT = (attr) => `${attr} must be a number`;
const STRING_BASE_TEXT = (attr) => `${attr} must be a text`;
const ANY_REQUIRED_TEXT = (attr) => `${attr} field cannot be empty`;
const NUMBER_POSITIVE_TEXT = (attr) => `${attr} cannot be negative`;
const PAGE = "Page";
const YEAR = "Year";
const TITLE = "Title";
const MOVIE = "Movie";
const FIND = "Find";
const REPLACE = "Replace";


module.exports = {
    MOVIE_NOT_FOUND,
    MONGO_DB_CONNECTION,
    MONGO_DB_CONNECTION_TRYING,
    NUMBER_BASE_TEXT,
    STRING_BASE_TEXT,
    ANY_REQUIRED_TEXT,
    NUMBER_POSITIVE_TEXT,
    PAGE,
    YEAR,
    TITLE,
    MOVIE,
    FIND,
    REPLACE
}