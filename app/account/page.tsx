import React from "react";

const AccountPage = () => {
  // Dummy user data
  const user = {
    name: "Bharti Pawar",
    email: "bharti@example.com",
    phone: "+91 9876543210",
    address: "123, Sunshine Apartments, Pune, India",
  };

  // Dummy orders
  const orders = [
    { id: "ORD001", product: "Luxury Handbag", date: "2026-02-15", status: "Delivered", amount: "$120" },
    { id: "ORD002", product: "Designer Sunglasses", date: "2026-02-10", status: "Shipped", amount: "$80" },
    { id: "ORD003", product: "Silk Scarf", date: "2026-01-25", status: "Cancelled", amount: "$45" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-600 text-white px-6 py-8">
          <h1 className="text-3xl font-bold">Account Details</h1>
          <p className="mt-2">Manage your profile and orders here.</p>
        </div>

        {/* Profile Section */}
        <div className="p-6 md:flex md:space-x-6">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-400 text-white flex items-center justify-center text-2xl font-bold">
                {user.name[0]}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-600 ">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>
            </div>
          </div>

          <div className="md:w-2/3">
            <h3 className="text-lg font-semibold mb-2 text-gray-600">Shipping Address</h3>
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner text-gray-600">
              <p>{user.address}</p>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-600">Order History</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="py-2 px-4 border-b">Order ID</th>
                    <th className="py-2 px-4 border-b">Product</th>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Status</th>
                    <th className="py-2 px-4 border-b">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="text-center">
                      <td className="py-2 px-4 border-b text-gray-600">{order.id}</td>
                      <td className="py-2 px-4 border-b text-gray-600">{order.product}</td>
                      <td className="py-2 px-4 border-b text-gray-600">{order.date}</td>
                      <td className={`py-2 px-4 border-b font-semibold ${
                        order.status === "Delivered" ? "text-green-600" :
                        order.status === "Shipped" ? "text-blue-600" :
                        "text-red-600"
                      }`}>
                        {order.status}
                      </td>
                      <td className="py-2 px-4 border-b text-gray-600">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 text-gray-700 p-6 text-center">
          &copy; 2026 Sharq Label. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
