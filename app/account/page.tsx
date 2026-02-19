"use client";
import React from "react";

/* ============================= */
/*           TYPES               */
/* ============================= */

type OrderStatus = "Delivered" | "Shipped" | "Cancelled";

interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface Order {
  id: string;
  product: string;
  date: string;
  status: OrderStatus;
  amount: string;
}

/* ============================= */
/*           DATA                */
/* ============================= */

const user: User = {
  name: "Bharti Pawar",
  email: "bharti@example.com",
  phone: "+91 9876543210",
  address: "123, Sunshine Apartments, Pune, India",
};

const orders: Order[] = [
  {
    id: "ORD001",
    product: "Luxury Handbag",
    date: "2026-02-15",
    status: "Delivered",
    amount: "$120",
  },
  {
    id: "ORD002",
    product: "Designer Sunglasses",
    date: "2026-02-10",
    status: "Shipped",
    amount: "$80",
  },
  {
    id: "ORD003",
    product: "Silk Scarf",
    date: "2026-01-25",
    status: "Cancelled",
    amount: "$45",
  },
];

/* ============================= */
/*       STATUS STYLES          */
/* ============================= */

const statusStyles: Record<OrderStatus, string> = {
  Delivered: "bg-green-500/20 text-green-400",
  Shipped: "bg-blue-500/20 text-blue-400",
  Cancelled: "bg-red-500/20 text-red-400",
};

/* ============================= */
/*         COMPONENT             */
/* ============================= */

const AccountPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto bg-[#1e293b] rounded-2xl shadow-xl border border-slate-700 overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-8">
          <h1 className="text-3xl font-bold">Account Dashboard</h1>
          <p className="mt-2 text-indigo-100">
            Manage your profile and track your orders.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 md:flex md:space-x-8">

          {/* Profile Card */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="bg-[#0f172a] border border-slate-700 p-6 rounded-2xl text-center shadow-md">
              <div className="w-24 h-24 mx-auto rounded-full bg-indigo-600 flex items-center justify-center text-3xl font-bold">
                {user.name[0]}
              </div>

              <h2 className="mt-4 text-xl font-semibold">
                {user.name}
              </h2>

              <p className="text-slate-400 mt-1">{user.email}</p>
              <p className="text-slate-400">{user.phone}</p>

              <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 transition py-2 rounded-xl font-semibold">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Address + Orders */}
          <div className="md:w-2/3">

            {/* Address */}
            <h3 className="text-lg font-semibold mb-3">
              Shipping Address
            </h3>

            <div className="bg-[#0f172a] border border-slate-700 p-4 rounded-xl text-slate-300">
              {user.address}
            </div>

            {/* Orders */}
            <h3 className="text-lg font-semibold mt-8 mb-4">
              Order History
            </h3>

            <div className="overflow-x-auto rounded-xl border border-slate-700">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="py-3 px-4 text-left">Order ID</th>
                    <th className="py-3 px-4 text-left">Product</th>
                    <th className="py-3 px-4 text-left">Date</th>
                    <th className="py-3 px-4 text-left">Status</th>
                    <th className="py-3 px-4 text-left">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-t border-slate-700 hover:bg-slate-800/50 transition"
                    >
                      <td className="py-3 px-4 text-slate-300">
                        {order.id}
                      </td>
                      <td className="py-3 px-4 text-slate-300">
                        {order.product}
                      </td>
                      <td className="py-3 px-4 text-slate-400">
                        {order.date}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[order.status]}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-indigo-400">
                        {order.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-800 text-slate-400 p-6 text-center text-sm border-t border-slate-700">
          © 2026 Sharq Label. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
