import Home from "@src/pages/home";
import Products from "@src/pages/products";
// import viteLogo from "@src/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@src/layouts/MainLayout";

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
