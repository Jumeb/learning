const express = require('express');

const router = express.Router();

const userRoute = require('../controllers/user');

const isAuth = require('../middleware/isAuth');


router.get('/', isAuth, userRoute.getUser);

router.get('/cakes/:eventId', userRoute.getBds);

router.get('/vals/:eventId', userRoute.getVals);

router.get('/pans/:eventId', userRoute.getPans);

router.get('/cups/:eventId', userRoute.getCups);

router.get('/dons/:eventId', userRoute.getDons);

router.get('/weds/:eventId', userRoute.getWeds);

router.get('/cookies/:eventId', userRoute.getCookies);

router.get('/add-event', isAuth, userRoute.getAddEvent);

router.post('/add-event', isAuth, userRoute.postAddEvent);

router.get('/pastry-detail/:cakeId', userRoute.getPastry);

router.get('/edit-event/:eventId', userRoute.getEditEvent);

router.post('/edit-event', isAuth, userRoute.postEditEvent);

router.get('/delete-event/:eventId',userRoute.getDeleteEvent);

router.get('/orders', isAuth, userRoute.getOrders);

router.post('/delete-event', isAuth, userRoute.postDeleteEvent);

router.post('/add-to-event', isAuth, userRoute.postAddCart);

router.post('/sub-from-event', isAuth, userRoute.postSubCart);

router.get('/event-cart/:eventId', isAuth, userRoute.getCart);

router.post('/cart-delete', isAuth, userRoute.postCartDelete);

router.post('/make-order', isAuth, userRoute.postOrder);



module.exports = router;