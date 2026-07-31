import api from "./axios";

export const getDashboard = () => {
  return api.get("/finance/dashboard");
};