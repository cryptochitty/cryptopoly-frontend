import React, { useState } from "react";

function WalletConnect() {
  const [wallet, setWallet] = useState(null);

  const connectWallet = () => {
    // placeholder function
    setWallet("0x1234...abcd");
  };

  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Connect Your Wallet</h2>
      <p className="mb-6">Securely connect your BNB Chain wallet to start tracking your crypto portfolio.</p>
      {wallet ? (
        <p className="font-mono bg-white text-green-600 inline-block px-4 py-2 rounded-full shadow-lg">{wallet}</p>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-white text-green-600 font-bold py-2 px-6 rounded-full shadow-lg hover:scale-105 transform transition"
        >
          Connect Wallet
        </button>
      )}
    </section>
  );
}

export default WalletConnect;
