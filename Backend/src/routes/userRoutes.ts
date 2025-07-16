import { Router } from 'express';
import { getUserData } from '../controller/userController';

const router = Router();

router.get('/', getUserData);

// Export the router
export default router;
