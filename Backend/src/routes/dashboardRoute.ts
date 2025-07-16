import { Router } from 'express';
import { getDashboardData } from '../controller/dashboardController';

const router = Router();

// Route to get dashboard data
router.get('/metrics', getDashboardData);

// Export the router
export default router;
