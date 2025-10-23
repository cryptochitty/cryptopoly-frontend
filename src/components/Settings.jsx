import React from "react";

function Settings() {
  const settings = [
    { id: 1, title: "Notification Preferences" },
    { id: 2, title: "Wallet Connections" },
    { id: 3, title: "Dark Mode" },
    { id: 4, title: "FAQs & Support" },
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-purple-400 to-pink-500 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">App Settings</h2>
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        {settings.map((item) => (
          <div
            key={item.id}
            className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transform transition text-center"
          >
            {item.title}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Settings;
