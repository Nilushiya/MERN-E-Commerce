const router = require('express').Router();
const userController = require("../controller/userController");

router.post('/registration',userController.register);
router.post('/login',userController.login);
router.post('/userData',userController.userData);

module.exports = router;