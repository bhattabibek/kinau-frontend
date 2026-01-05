import { LogOut, Settings, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-h-screen  my-5 mx-5 rounded-4xl flex">
      <aside
  className="w-64 hidden md:block p-6 
    bg-white/20 backdrop-blur-xl 
    border border-white/30 
    rounded-3xl m-6 text-gray-800"
  style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.15)' }}
>
        <h2 className="text-2xl font-semibold mb-8">User Panel</h2>
        <ul className="space-y-4">
          <li>
            <Link
              to="profile"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/30 hover:text-blue-700 transition"
            >
              <User size={20} /> <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="orders"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/30 hover:text-blue-700 transition"
            >
              <ShoppingCart size={20} /> <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link
              to="wishlist"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/30 hover:text-purple-700 transition"
            >
              <Settings size={20} /> <span>Wishlist</span>
            </Link>
          </li>
          <li className="pt-4 border-t border-white/30">
            <Link
              to="shipping"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/30 hover:text-red-600 transition"
            >
              <LogOut size={20} /> <span>Shipping</span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
