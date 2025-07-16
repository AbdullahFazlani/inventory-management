"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
// Routes Import
const dashboardRoute_1 = __importDefault(require("./routes/dashboardRoute"));
const productRoute_1 = __importDefault(require("./routes/productRoute"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const expenseRoute_1 = __importDefault(require("./routes/expenseRoute"));
// Configuration
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)('common'));
// Routes
app.use('/dashboard', dashboardRoute_1.default);
app.use('/products', productRoute_1.default);
app.use('/users', userRoutes_1.default);
app.use('/expenses', expenseRoute_1.default);
// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
