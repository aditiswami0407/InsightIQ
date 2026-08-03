import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Revenue from "./pages/Revenue";
import Expense from "./pages/Expense";
import Profit from "./pages/Profit";
import Reports from "./pages/Reports";
import KPI from "./pages/KPI";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import AIAdvisor from "./pages/AIAdvisor";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";

function App() {

  const token = localStorage.getItem("token");

  return (

    <BrowserRouter>

      <Routes>

        {/* Login */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected Routes */}

        <Route
          path="/"
          element={token ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route
          path="/revenue"
          element={token ? <Revenue /> : <Navigate to="/login" />}
        />

        <Route
          path="/expense"
          element={token ? <Expense /> : <Navigate to="/login" />}
        />

        <Route
          path="/profit"
          element={token ? <Profit /> : <Navigate to="/login" />}
        />

        <Route
          path="/kpi"
          element={token ? <KPI /> : <Navigate to="/login" />}
        />

        <Route
          path="/products"
          element={token ? <Products /> : <Navigate to="/login" />}
        />

        <Route
          path="/products/:id"
          element={token ? <ProductDetails /> : <Navigate to="/login" />}
        />

        <Route
          path="/reports"
          element={token ? <Reports /> : <Navigate to="/login" />}
        />

        <Route
          path="/aiadvisor"
          element={token ? <AIAdvisor /> : <Navigate to="/login" />}
        />

        <Route
          path="/notifications"
          element={token ? <Notifications /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />

        {/* Redirect Unknown Routes */}

        <Route
          path="*"
          element={<Navigate to={token ? "/dashboard" : "/login"} />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;