import React, { useEffect, useState } from "react";
import { getMarketData } from "../utils/api";

export default function MarketAnalysis() {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    getMarketData().then(data => setMarkets(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Polymarket Market Analysis</h2>
      <ul>
        {markets.length === 0 ? (
          <li>No markets available</li>
        ) : (
          markets.map(m => (
            <li key={m.id} className="mb-2 p-2 border rounded shadow-sm">
              <h3 className="font-semibold">{m.title}</h3>
              <p>{m.description}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
