import React from "react";

const OrdersTable = () => {
  const orders = [
    { id: "#1234", customer: "John Doe", amount: "$120", status: "Completed" },
    { id: "#1235", customer: "Jane Smith", amount: "$200", status: "Pending" },
    {
      id: "#1236",
      customer: "Alice Brown",
      amount: "$75",
      status: "Cancelled",
    },
  ];

  return (
    <div className="bg-white p-4 shadow-md rounded-lg overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Latest Orders</h2>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Order ID</th>
              <th className="p-2 text-left">Customer</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.customer}</td>
                <td className="p-2">{order.amount}</td>
                <td className="p-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
