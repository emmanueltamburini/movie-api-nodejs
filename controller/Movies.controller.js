const Router = require("@koa/router");
const {getAllElement, getElement, replaceElement} = require("../middleware");
const {PREFIX, ROOT, TITLE} = require("../constant/controller");

const router = new Router({
    prefix: PREFIX
});

router.get(TITLE, getElement);

router.get(ROOT, getAllElement);

router.post(ROOT, replaceElement);

module.exports = router;