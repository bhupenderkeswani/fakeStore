import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>
        <p>
          &copy; 2025 Fake Store by <b>Bhupender Keswani</b>
        </p>
      </footer>
    </>
  );
}
