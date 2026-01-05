export default function OrderTrackingPage() {
  const orderStatus = "Out for Delivery"; // could be dynamic from backend

  const steps = ["Order Placed", "Shipped", "Out for Delivery", "Delivered"];

  const getStatusClass = (step: string) => {
    const currentIndex = steps.indexOf(orderStatus);
    const stepIndex = steps.indexOf(step);

    if (stepIndex < currentIndex) return "bg-green-500 text-white";
    if (stepIndex === currentIndex) return "bg-yellow-500 text-white";
    return "bg-gray-200 text-gray-500";
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Track Your Order</h2>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h4 className="text-lg font-semibold mb-4">Order #123456</h4>

        <div className="flex items-center justify-between relative mb-8">
          {steps.map((step, i) => (
            <div key={step} className="flex flex-col items-center w-full">
              {/* Dot */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${getStatusClass(
                  step
                )}`}
              >
                {i + 1}
              </div>

              {/* Label */}
              <p className="text-xs mt-2 text-center w-20">{step}</p>

              {/* Line */}
              {i < steps.length - 1 && (
                <div className="h-1 bg-gray-300 w-full absolute top-3 left-0 right-0 z-0 mx-auto">
                  <div
                    className={`h-1 ${
                      steps.indexOf(orderStatus) > i
                        ? "bg-green-500"
                        : "bg-gray-300"
                    } w-full transition-all duration-300`}
                    style={{ width: "100%" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p>
            <span className="font-semibold">Current Status:</span> {orderStatus}
          </p>
          <p>
            <span className="font-semibold">Estimated Delivery:</span> July 27,
            2025
          </p>
          <p>
            <span className="font-semibold">Shipping via:</span> DHL Express
          </p>
        </div>
      </div>
    </div>
  );
}
