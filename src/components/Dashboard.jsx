import React from "react";

function Dashboard() {
  const marketData = [
    { id: 1, title: "BTC/USD", price: "$34,500", change: "+3%" },
    { id: 2, title: "ETH/USD", price: "$2,400", change: "-1.2%" },
    { id: 3, title: "BNB/USD", price: "$350", change: "+0.5%" },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Market Insights Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {marketData.map((market) => (
          <div
            key={market.id}
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transform transition"
          >
            <h3 className="font-bold text-xl mb-2">{market.title}</h3>
            <p className="text-2xl font-extrabold mb-1">{market.price}</p>
            <p className={`font-bold ${market.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{market.change}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
