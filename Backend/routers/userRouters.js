const router = require('express').Router();
const userController = require("../controller/userController");
const app = require('../app');

router.post('/registration',userController.register);
router.post('/login',userController.login);
router.post('/userData',userController.userData);
// router.post('/addtocart',userController.addtocart,fetchUser);
// router.post('/removetocart',userController.removetocart,fetchUser);

module.exports = router;