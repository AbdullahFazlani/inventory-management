import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardData = async (req: Request, res: Response) => {
  try {
    const popularProducts = await prisma.products.findMany({
      take: 5,  // Adjust the number of products to return
      orderBy: {
        stockQuantity: 'desc',
      },
    });
    const saleSummary = await prisma.salesSummary.findMany({
      take: 5,  // Adjust the number of products to return
      orderBy: {
        date: 'desc',
      },
    });
    const PurchaseSummary = await prisma.purchaseSummary.findMany({
      take: 5,  // Adjust the number of products to return
      orderBy: {
        date: 'desc',
      },
    });
    const expenseSummary = await prisma.expenseSummary.findMany({
      take: 5,  // Adjust the number of products to return
      orderBy: {
        date: 'desc',
      },
    });
    const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
      take: 5,  // Adjust the number of products to return
      orderBy: {
        date: 'desc',
      },
    });
    const expenseByCategorySummary = expenseByCategorySummaryRaw.map((item) => ({
        ...item,
       amount: parseFloat(item.amount.toString()), // Ensure amount is a number
        }));
        res.status(200).json({
      popularProducts,
      saleSummary,
      PurchaseSummary,
      expenseSummary,
      expenseByCategorySummary,
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};