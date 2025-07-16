import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getExpenseByCategory = async (req: Request, res: Response) => {
  try {
    const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany(
      {
        orderBy: {
          date: 'desc',
        },
      }
    );
    const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
      (item) => ({
        ...item,
        amount: item.amount.toString(),
      })
    );
    res.status(200).json(expenseByCategorySummary);
  } catch (error) {
    console.error('Error fetching expense data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
