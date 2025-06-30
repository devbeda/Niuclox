import React from "react";
import {Header, Footer} from "./components/molecules/molecules.js"
import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <div className="">
      <Header />
      <main className="  " >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
