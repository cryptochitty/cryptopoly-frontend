import React from "react";

function SplashScreen() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white text-center p-4">
      <h1 className="text-5xl font-extrabold mb-4 animate-pulse">Welcome to Crypto Insight Tracker</h1>
      <p className="text-lg mb-6">Your real-time crypto market companion.</p>
      <button className="bg-white text-purple-700 font-bold py-2 px-6 rounded-full shadow-lg hover:scale-105 transform transition">
        Get Started
      </button>
    </section>
  );
}

export default SplashScreen;
