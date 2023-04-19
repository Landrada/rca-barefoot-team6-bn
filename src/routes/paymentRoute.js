import { Router } from 'express';
import { isLoggedIn } from '../middlewares/authMiddleware';
import { confirmPayment, createPayment, getPayments, getPaymentsForRequest, getPaymentsForRequestAndStatus } from '../controllers/paymentController';
const router = Router();

router.get('/', getPayments)
router.put('/confirm-payment/:id', isLoggedIn, confirmPayment);
router.post('/create-checkout-session', createPayment);
router.get('/requests/:id', isLoggedIn, getPaymentsForRequest);
router.get('/requests/:id/status/:status', isLoggedIn, getPaymentsForRequestAndStatus)


export default router;