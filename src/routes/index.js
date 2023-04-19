import express from 'express';
import user from './userRoute';
import hotel from './hotelRoute';
import destination from './destinationRoute';
import request from './requestRoute'
import roomRoute from './roomRoute';
import payment from './paymentRoute'

const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

router.use('/users', user);
router.use('/hotels', hotel);
router.use('/destinations', destination);
router.use('/requests', request);
router.use('/rooms', roomRoute);
router.use('/payments', payment)
export default router;
