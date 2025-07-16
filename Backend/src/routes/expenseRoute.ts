import { Router } from 'express';
import { getExpenseByCategory } from '../controller/expenseController';

const router = Router();

router.get('/', getExpenseByCategory);

// Export the router
export default router;
