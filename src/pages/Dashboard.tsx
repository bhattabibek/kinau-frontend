function Dashboard() {
  const user = {
    name: "Bibek Bhatta",
    email: "bibek@example.com",
  };

  const stats = [
    { label: "Orders", value: 14 },
    { label: "Wishlist", value: 5 },
    { label: "Cart Items", value: 3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr p-6] font-sans">
      {/* Main Content */}
      <main className="max-w-2xl mx-auto space-y-5 px-10 py-10 rounded-3xl">
        {/* Top Navbar */}
        <div
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
          className="flex justify-between items-center bg-white  shadow-md rounded-4xl px-6 py-4"
        >
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome, {user.name}
          </h1>
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>

        {/* Dashboard Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white bg-opacity-50 backdrop-blur-xl border border-white border-opacity-30 shadow-lg rounded-2xl p-6 text-center transition-all hover:scale-105 hover:shadow-xl"
            >
              <p className="text-3xl font-bold text-gray-800">{item.value}</p>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-white bg-opacity-60 backdrop-blur-xl shadow-lg border border-white border-opacity-30 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Orders
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead>
                <tr className="border-b border-gray-300 text-gray-500">
                  <th className="py-3 pr-6">Order ID</th>
                  <th className="py-3 pr-6">Date</th>
                  <th className="py-3 pr-6">Status</th>
                  <th className="py-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-white/30 transition">
                  <td className="py-3 pr-6">#123456</td>
                  <td className="py-3 pr-6">2025-07-20</td>
                  <td className="py-3 pr-6 text-green-600 font-medium">
                    Delivered
                  </td>
                  <td className="py-3">Rs. 3,499</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-white/30 transition">
                  <td className="py-3 pr-6">#123457</td>
                  <td className="py-3 pr-6">2025-07-22</td>
                  <td className="py-3 pr-6 text-yellow-600 font-medium">
                    Shipped
                  </td>
                  <td className="py-3">Rs. 2,199</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
