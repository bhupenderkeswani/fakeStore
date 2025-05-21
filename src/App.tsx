import Home from "@pages/home";
import Products from "@pages/products";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/product-list" element={<Products />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
