import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import authContext from "./Context/AuthContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
  const { user, loading } = useContext(authContext);
  if (loading) return null
  if (!user) return <Navigate to="/login" replace />;
  return (
    <>
      <div className="min-h-screen min-w-full flex flex-col bg-[#242424] ">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
