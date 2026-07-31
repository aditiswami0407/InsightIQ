import api from "./axios";

// Dashboard Cards
export const getTotalRevenue = () =>
  api.get("/finance/total-revenue");

export const getTotalExpense = () =>
  api.get("/finance/total-expense");

export const getNetProfit = () =>
  api.get("/finance/net-profit");

export const getRemainingBudget = () =>
  api.get("/finance/remaining-budget");

export const getBusinessHealth = () =>
  api.get("/finance/business-health");

// Revenue Page
export const getRevenue = () =>
  api.get("/revenue");

// Expense Page
export const getExpense = () =>
  api.get("/expense");

// Budget Page
export const getBudget = () =>
  api.get("/budget");

// Payment Page
export const getPayments = () =>
  api.get("/payment");

// Reports Page
export const getReports = () =>
  api.get("/reports");