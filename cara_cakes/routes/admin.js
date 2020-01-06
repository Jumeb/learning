
const getAdminRoutes = require('../controllers/admin');
const express = require('express');
const router = express.Router();

router.get('/', getAdminRoutes.getIndex);
router.get('/general', getAdminRoutes.getGeneral);
// // router.get('/bamenda', getAdminRoutes.getBdaClients);
router.get('/cakes', getAdminRoutes.getBds);

router.get('/cookies', getAdminRoutes.getCookie);

router.get('/pans', getAdminRoutes.getPans);

router.get('/weds', getAdminRoutes.getWeds);

router.get('/cups', getAdminRoutes.getCups);

router.get('/vals', getAdminRoutes.getVal);

router.get('/dons', getAdminRoutes.getDons);

router.get('/pastry/:pastryId', getAdminRoutes.getCake);

router.get('/add-bds', getAdminRoutes.getAddBds);

router.get('/add-cookies', getAdminRoutes.getAddCookie);

router.get('/add-pans', getAdminRoutes.getAddPan);

router.get('/add-weds', getAdminRoutes.getAddWeds);

router.get('/add-cups', getAdminRoutes.getAddCup);

router.get('/add-dons', getAdminRoutes.getAddDon);

router.get('/add-vals', getAdminRoutes.getAddVal);

router.post('/add-pastry', getAdminRoutes.postAddPastry);

router.post('/edit-pastry', getAdminRoutes.postEditPastry);

router.get('/edit-pastry/:pastryId', getAdminRoutes.getEditPastry);


router.get('/delete-pastry/:pastryId', getAdminRoutes.getDeletePastry);

router.post('/delete-pastry', getAdminRoutes.postDeletePastry);

router.post('/signIn', getAdminRoutes.postSignIn);
router.post('/logout', getAdminRoutes.postLogout);



module.exports = router;