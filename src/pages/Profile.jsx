import React from "react";

export default function Profile({ wallet }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {wallet ? (
        <div>
          <p><strong>Wallet Address:</strong> {wallet}</p>
        </div>
      ) : (
        <p>Connect your wallet to see profile info.</p>
      )}
    </div>
  );
}
