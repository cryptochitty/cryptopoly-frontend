import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MarketAnalysis from "./pages/MarketAnalysis";
import Profile from "./pages/Profile";
import WalletConnect from "./components/WalletConnect";

function App() {
  const [wallet, setWallet] = useState(null);

  return (
    <Router>
      <Navbar />
      <nav className="bg-gray-100 dark:bg-gray-900 p-2 flex gap-4 justify-center">
        <Link to="/" className="text-blue-600 dark:text-blue-400">Home</Link>
        <Link to="/market" className="text-blue-600 dark:text-blue-400">Market Analysis</Link>
        <Link to="/profile" className="text-blue-600 dark:text-blue-400">Profile</Link>
        <WalletConnect setWallet={setWallet} />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<MarketAnalysis />} />
        <Route path="/profile" element={<Profile wallet={wallet} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
