const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.index);
router.get("/about", homeController.about);
router.get("/blog", homeController.blog);
router.get("/404", homeController.notFound);

module.exports = router;
