import React from "react";

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-gray-900 text-white">
      <div className="p-6 text-2xl font-bold ">ADMIN</div>
      <nav className="px-4 space-y-2">
        {["Dashboard", "Users", "Orders", "Products"].map((item) => (
          <div
            key={item}
            className="px-3 py-2 rounded cursor-pointer hover:bg-gray-700"
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
