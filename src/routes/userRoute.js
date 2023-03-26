import { Router } from 'express';
import { isLoggedIn, verifyEmail } from '../middlewares/authMiddleware';
import { getUsers, getMyProfile, loginUser, createUser, welcomeNewUser, logout } from '../controllers/userController';
const router = Router();
router.post('/login', loginUser)
router.get('/self', isLoggedIn, getMyProfile);
router.get('/', isLoggedIn, getUsers)
router.post('/', createUser)
router.use('/verify-email/:token', verifyEmail)
router.get('/verify-email/:token', welcomeNewUser)
router.put('/logout', isLoggedIn, logout);

export default router