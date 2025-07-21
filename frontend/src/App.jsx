import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Admin/Login";
import Register from "./pages/Admin/Register";
import Admin from "./pages/Admin/Admin";
import NotFound from "./pages/Customer/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Customer/Home";
import Layout from "./pages/Customer/Layout";
import Services from "./pages/Customer/Services";
import AboutUs from "./pages/Customer/AboutUs";
import Products from "./pages/Customer/Products";
import ProductsAdmin from "./pages/Admin/Products";
import ServiceAdmin from "./pages/Admin/Services";
import FooterAdmin from "./pages/Admin/Footer";
import Product_details from "./pages/Customer/Product_details";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="products" element={<Products />} />
        <Route path="product_details" element={<Product_details />} />
        <Route path="*" element={<NotFound />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/productadmin"
            element={
              <ProtectedRoute>
                <ProductsAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/serviceadmin"
            element={
              <ProtectedRoute>
                <ServiceAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/footeradmin"
            element={
              <ProtectedRoute>
                <FooterAdmin />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;