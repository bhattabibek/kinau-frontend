import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
<main className="mt-20">{children}</main>
      

      <Footer />
    </>
  );
};

export default Layout;
