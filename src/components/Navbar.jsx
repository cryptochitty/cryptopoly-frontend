import React from "react";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Crypto Insight</h1>
        <div className="space-x-6">
          <a href="#dashboard" className="hover:underline">Dashboard</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#alerts" className="hover:underline">Alerts</a>
          <a href="#settings" className="hover:underline">Settings</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
