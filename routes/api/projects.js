const router = require("express").Router();
const projectController = require("../../controllers/projectController");

router.route("/")
    .get(projectController.create)
    .post(projectController.findAll);

module.exports = router;