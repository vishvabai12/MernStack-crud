const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/createuser', userController.createUser);
router.get('/loginuser' , userController.loginUser);

router.get('/getusers', userController.getAllUsers);
router.get('/singleuser/:id', userController.getUserById);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;
