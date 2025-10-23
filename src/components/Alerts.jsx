import React from "react";

function Alerts() {
  const alerts = [
    { id: 1, message: "BTC/USD price increased by 3%", type: "success" },
    { id: 2, message: "ETH/USD dropped below $2,400", type: "error" },
    { id: 3, message: "New Polymarket prediction available", type: "info" },
  ];

  const getColor = (type) => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-700 border-green-500";
      case "error":
        return "bg-red-100 text-red-700 border-red-500";
      case "info":
        return "bg-blue-100 text-blue-700 border-blue-500";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="py-12 px-6 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Alerts & Notifications</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`border-l-4 p-4 rounded sha
