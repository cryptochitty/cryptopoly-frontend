import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-5xl mx-auto text-center">
        <p className="mb-2">&copy; 2025 Crypto Insight Tracker. All rights reserved.</p>
        <p>
          Follow us on{" "}
          <a href="#" className="text-blue-400 hover:underline">Twitter</a>,{" "}
          <a href="#" className="text-blue-400 hover:underline">LinkedIn</a>,{" "}
          <a href="#" className="text-blue-400 hover:underline">GitHub</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
