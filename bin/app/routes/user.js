const { Router } = require('express');
const router = Router();
const handler = require('../../modules/user/api_handler');
const jwtAuth = require('../../helper/auth/jwt_auth_helper');

router.get('/generate-token', handler.generateToken);

router.get('/', jwtAuth.verifyToken, handler.getUser);
router.post('/create', jwtAuth.verifyToken, handler.createUser);
router.put('/update/:id', jwtAuth.verifyToken, handler.updateUser);
router.delete('/delete/:id', jwtAuth.verifyToken, handler.deleteUser);

module.exports = router;
