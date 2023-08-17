const { Router } = require('express');
const router = Router();
const userController = require('../../modules/user/controller');

router.get('/', userController.getUser);
router.get('/generate-token', userController.generateToken);
router.post('/create', userController.createUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
