const Router = require("@koa/router");
const {getMovie, getAllMovie, searchAndUpdateByTitle} = require("../service/Movies.service");

const router = new Router({
    prefix: "/movies"
});

router.get('/:title', async (req, res, next) => {
    const title = req.params.title;
    const year = req.get('year');
    req.body = await getMovie(title, year);
})

router.get('/', async (req, res, next) => {
    const page = req.get('page');
    req.body = await getAllMovie(page ? page : 1);
})

router.post('/', async (req, res, next) => {
    const body = req.request.body;
    req.body = await searchAndUpdateByTitle(body.movie, body.find, body.replace);
})

module.exports = router;