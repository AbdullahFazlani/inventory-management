import { Router } from 'express';
import { getProductData, createProduct } from '../controller/productController';

const router = Router();

router.get('/', getProductData);
router.post('/', createProduct);

// Export the router
export default router;
