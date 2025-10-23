import React from "react";

function Onboarding() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">Getting Started</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
          <h3 className="font-bold text-xl mb-2">Connect Wallet</h3>
          <p>Connect your BNB Chain wallet securely to track your portfolio.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
          <h3 className="font-bold text-xl mb-2">Explore Markets</h3>
          <p>View real-time market insights, price alerts, and predictions from Polymarket.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
          <h3 className="font-bold text-xl mb-2">Track Portfolio</h3>
          <p>Manage your assets, transactions, and share achievements on social platforms.</p>
        </div>
      </div>
    </section>
  );
}

export default Onboarding;
