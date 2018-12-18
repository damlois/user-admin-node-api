const express = require('express');
const router = express.Router();
const terraController = require('../controllers/TerraController')

router.get('/', terraController.base_endpoint);

router.post('/users/signup', terraController.user_signup_post);

router.post('/users/signin', terraController.user_signin_post);

router.get('/admin/getusers', terraController.userslist_get);

router.get('/admin/getbyid/:id', terraController.user_getbyid);

router.get('/admin/getbyname/:name', terraController.user_getbyname);

router.delete('/admin/deletebyid/:id', terraController.delete_byid);

router.delete('/admin/deleteall', terraController.delete_all);


module.exports = router;