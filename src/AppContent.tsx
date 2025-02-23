import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { CartProvider } from "./context/ProductContext";
import Alert from "./components/Alert";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Log_Sign/Login";
import Register from "./Pages/Log_Sign/Register";
import Logout from "./Pages/Log_Sign/Logout";
import SingleProduct from "./products/SingleProduct";
import Dashboard from "./Dashboard/Dashboard";
import { Navber } from "./components/Navber";
import Loader from "./components/Loader";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./Pages/Log_Sign/Fotgot";
import ResetPassword from "./Pages/Log_Sign/ResetPass";

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Global loading effect on route change
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // Simulate a delay for the loader
    return () => clearTimeout(timeout);
  }, [location.pathname]); // This will trigger the loader on any route change

  // Hide Navbar on login & register pages, and any routes under /dashboard
  const hideNavbarRoutes = ["/login", "/register"];
  const shouldShowNavbar =
    !hideNavbarRoutes.includes(location.pathname) &&
    !location.pathname.startsWith("/dashboard");

  // We don't want the loader to show for dashboard pages
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <>
      <CartProvider>
        {shouldShowNavbar && <Navber />}
        {loading && !isDashboardRoute ? (
          <>
            <Loader /> <Alert />
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detils/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />

            {/* Dashboard route */}
            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute>
                <Dashboard />
                </PrivateRoute>
              }
            />
            {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}

            <Route path="/logout" element={<Logout />} />
          </Routes>
        )}
      </CartProvider>
    </>
  );
};

export default AppContent;

// <Route
//   path="/dashboard/*"
//   element={
//     <PrivateRoute>
//       <Dashboard />
//     </PrivateRoute>
//   }
// />;
