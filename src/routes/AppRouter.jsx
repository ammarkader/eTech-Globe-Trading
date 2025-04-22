import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const Services = lazy(() => import("../pages/Services"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

function AppRouter() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default AppRouter;
