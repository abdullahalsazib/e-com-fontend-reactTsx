import React from "react";

const DashboardCards = () => {
  const stats = [
    { title: "Total Sales", value: "$25,000", color: "bg-blue-500" },
    { title: "Orders", value: "320", color: "bg-green-500" },
    { title: "Customers", value: "1,200", color: "bg-yellow-500" },
    { title: "Revenue", value: "$50,000", color: "bg-red-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-6 text-white rounded-lg shadow-md ${stat.color}`}
        >
          <h2 className="text-xl font-semibold">{stat.title}</h2>
          <p className="text-2xl">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
