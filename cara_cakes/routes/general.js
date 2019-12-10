const express = require('express');

const router = express.Router();

const generalRoutes = require('../controllers/general');

router.get('/', generalRoutes.getIndex);
router.get('/gallery', generalRoutes.getGallery);
router.get('/stories', generalRoutes.getStories);
router.get('/about', generalRoutes.getAbout);
router.get('/signup', generalRoutes.getSignUp);
router.get('/login', generalRoutes.getLogin);
router.post('/login', generalRoutes.postLogin);
router.post('/logout', generalRoutes.postLogout);
router.post('/signup', generalRoutes.postSignup)







module.exports = router;