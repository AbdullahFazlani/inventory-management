"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controller/productController");
const router = (0, express_1.Router)();
router.get('/', productController_1.getProductData);
router.post('/', productController_1.createProduct);
// Export the router
exports.default = router;
