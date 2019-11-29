const express = require('express');

const router = express.Router();

const generalRoutes = require('../controllers/general');


router.get('/', generalRoutes.getIndex);
router.get('/gallery', generalRoutes.getGallery);
router.get('/stories', generalRoutes.getStories);
router.get('/about', generalRoutes.getAbout);
router.get('/signup', generalRoutes.getSignUp);
router.get('/login', generalRoutes.getSignIp);







module.exports = router;