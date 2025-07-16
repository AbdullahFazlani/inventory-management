import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

// Routes Import
import dashboardRoute from './routes/dashboardRoute';
import productRoute from './routes/productRoute';
import userRoute from './routes/userRoutes';
import expensesRoutes from './routes/expenseRoute';

// Configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('common'));

// Routes
app.use('/dashboard', dashboardRoute);
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/expenses', expensesRoutes);

// Server Setup
const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
