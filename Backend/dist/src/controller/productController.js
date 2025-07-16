"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getProductData = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search || '';
        const products = yield prisma.products.findMany({
            where: {
                name: {
                    contains: search,
                },
            },
        });
        res.status(200).json(products);
    }
    catch (error) {
        console.error('Error fetching product data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getProductData = getProductData;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, name, price, rating, stockQuantity } = req.body;
        const newProduct = yield prisma.products.create({
            data: {
                productId,
                name,
                price,
                rating,
                stockQuantity,
            },
        });
        res.status(201).json(newProduct);
    }
    catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.createProduct = createProduct;
