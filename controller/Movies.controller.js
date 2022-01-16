const Router = require("@koa/router");
const {getAllElement, getElement, replaceElement} = require("../midleware");

const router = new Router({
    prefix: "/movies"
});

router.get('/:title', getElement);

router.get('/', getAllElement);

router.post('/', replaceElement);

module.exports = router;