import React from "react";
import SplashScreen from "../components/SplashScreen";
import Onboarding from "../components/Onboarding";
import WalletConnect from "../components/WalletConnect";
import Dashboard from "../components/Dashboard";
import Portfolio from "../components/Portfolio";
import Alerts from "../components/Alerts";
import Settings from "../components/Settings";

export default function Home() {
  return (
    <div className="p-4">
      <SplashScreen />
      <Onboarding />
      <WalletConnect />
      <Dashboard />
      <Portfolio />
      <Alerts />
      <Settings />
    </div>
  );
}
