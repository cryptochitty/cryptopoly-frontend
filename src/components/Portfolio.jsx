import React from "react";

function Portfolio() {
  const portfolioData = [
    { asset: "BTC", amount: 1.2, value: "$41,400" },
    { asset: "ETH", amount: 5, value: "$12,000" },
    { asset: "BNB", amount: 20, value: "$7,000" },
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Portfolio</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        {portfolioData.map((item) => (
          <div key={item.asset} className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition text-center">
            <h3 className="font-bold text-xl mb-2">{item.asset}</h3>
            <p className="text-lg mb-1">{item.amount} Coins</p>
            <p className="font-extrabold text-green-600">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
