const Router = require("@koa/router");
const {getMovieAPI, getAllMovieAPI, searchAndUpdateByTitleAPI} = require("../api/Movies.api.js");

const router = new Router({
    prefix: "/movies"
});

router.get('/:title', async (req, res, next) => {
    const title = req.params.title;
    const year = req.get('year');
    console.log(title, year);
    req.body = await getMovieAPI(title, year);
})

router.get('/', async (req, res, next) => {
    const page = req.get('page');
    req.body = await getAllMovieAPI(page ? page : 1);
})

router.post('/', async (req, res, next) => {
    const body = req.request.body;
    req.body = await searchAndUpdateByTitleAPI(body.movie, body.find, body.replace);
})

module.exports = router;