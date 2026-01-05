import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex">
        <main className="mt-20">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
