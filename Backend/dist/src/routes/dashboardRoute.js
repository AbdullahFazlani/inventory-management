"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controller/dashboardController");
const router = (0, express_1.Router)();
// Route to get dashboard data
router.get('/metrics', dashboardController_1.getDashboardData);
// Export the router
exports.default = router;
