const router = require('express').Router();
const userController = require("../controller/userController");

router.post('/registration',userController.register);

module.exports = router;