const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.index);
router.get("/about", homeController.about);
router.get("/blog", homeController.blog);
router.get("/contact", homeController.contact);
router.get("/course", homeController.course);
router.get("/feature", homeController.feature);
router.get("/team", homeController.team);
router.get("/testimonial", homeController.testimonial);
router.get("/404", homeController.notFound);

module.exports = router;
