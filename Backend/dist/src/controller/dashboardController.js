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
exports.getDashboardData = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getDashboardData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const popularProducts = yield prisma.products.findMany({
            take: 5, // Adjust the number of products to return
            orderBy: {
                stockQuantity: 'desc',
            },
        });
        const saleSummary = yield prisma.salesSummary.findMany({
            take: 5, // Adjust the number of products to return
            orderBy: {
                date: 'desc',
            },
        });
        const PurchaseSummary = yield prisma.purchaseSummary.findMany({
            take: 5, // Adjust the number of products to return
            orderBy: {
                date: 'desc',
            },
        });
        const expenseSummary = yield prisma.expenseSummary.findMany({
            take: 5, // Adjust the number of products to return
            orderBy: {
                date: 'desc',
            },
        });
        const expenseByCategorySummaryRaw = yield prisma.expenseByCategory.findMany({
            take: 5, // Adjust the number of products to return
            orderBy: {
                date: 'desc',
            },
        });
        const expenseByCategorySummary = expenseByCategorySummaryRaw.map((item) => (Object.assign(Object.assign({}, item), { amount: parseFloat(item.amount.toString()) })));
        res.status(200).json({
            popularProducts,
            saleSummary,
            PurchaseSummary,
            expenseSummary,
            expenseByCategorySummary,
        });
    }
    catch (error) {
        console.error("Error fetching dashboard data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getDashboardData = getDashboardData;
