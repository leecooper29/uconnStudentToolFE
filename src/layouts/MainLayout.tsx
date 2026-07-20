// src/layouts/MainLayout.tsx
import Header from "../shared/header";
import Footer from "../shared/footer/footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
