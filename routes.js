const { response } = require('express');
let express = require ('express');
let router = express.Router();

let userController = require('./controllers/userController');

//liste des routes vers les contrôleurs pour liste des users
router.get('/', (request, response) => response.redirect('/user'));
router.get('/user', userController.userList);
router.get('/user/show/:iduser', userController.userShow);
router.get('/user/remove/:iduser', userController.userRemove);
router.get('/user/add', userController.userFormAdd);
router.post('/user/new', userController.userNew);
router.get('/user/update/:iduser', userController.userUpdate);

module.exports = router;
