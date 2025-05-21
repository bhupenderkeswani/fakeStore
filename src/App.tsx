import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import Home from "@src/pages/home";
const Products = lazy(() => import("@pages/products"));
const NotFound = lazy(() => import("@pages/not_found"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/product-list" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
