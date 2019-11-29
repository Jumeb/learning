const express = require('express');

const router = express.Router();

const userRoute = require('../controllers/user');


router.get('/', userRoute.getUser);

router.get('/cakes/:eventId', userRoute.getBds);

router.get('/vals/:eventId', userRoute.getVals);

router.get('/pans/:eventId', userRoute.getPans);

router.get('/cups/:eventId', userRoute.getCups);

router.get('/dons/:eventId', userRoute.getDons);

router.get('/weds/:eventId', userRoute.getWeds);

router.get('/cookies/:eventId', userRoute.getCookies);

router.get('/add-event', userRoute.getAddEvent);

router.post('/add-event', userRoute.postAddEvent);

router.get('/pastry-detail/:cakeId', userRoute.getPastry);

router.get('/edit-event/:eventId', userRoute.getEditEvent);

router.post('/edit-event', userRoute.postEditEvent);

router.get('/delete-event/:eventId',userRoute.getDeleteEvent);

router.get('/orders', userRoute.getOrders);

router.post('/delete-event', userRoute.postDeleteEvent);

router.post('/add-to-event', userRoute.postAddCart);

router.post('/sub-from-event', userRoute.postSubCart);

router.get('/event-cart/:eventId', userRoute.getCart);

router.post('/cart-delete', userRoute.postCartDelete);

router.post('/make-order', userRoute.postOrder);



module.exports = router;