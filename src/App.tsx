import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import { Suspense, useEffect, useState } from "react";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import SingleProduct from "./products/SingleProduct";
import { CartProvider } from "./context/ProductContext";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import { Navber } from "./components/Navber";
import Blog from "./Pages/Blog";
import Login from "./Pages/Log_Sign/Login";
import Register from "./Pages/Log_Sign/Register";
import Logout from "./Pages/Log_Sign/Logout";
import Alert from "./components/Alert";

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-15 w-15 border-t-4 border-blue-500"></div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // Simulate delay
    return () => clearTimeout(timeout);
  }, [location.pathname]); // Runs on route change

  // Hide Navbar on login & register pages, and any routes under /dashboard
  const hideNavbarRoutes = ["/login", "/register"];
  const shouldShowNavbar =
    !hideNavbarRoutes.includes(location.pathname) &&
    !location.pathname.startsWith("/dashboard");

  return (
    <>
      <CartProvider>
        {shouldShowNavbar && <Navber />}
        {loading ? (
          <>
            <Loader /> <Alert />
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navber" element={<Navber />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detils/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />

            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        )}
      </CartProvider>
    </>
  );
};

function App() {
  return (
    <Suspense fallback={<p>Loading component...</p>}>
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
