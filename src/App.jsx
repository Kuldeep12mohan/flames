import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [partner, setPartner] = useState("");
  const [percentage, setPercentage] = useState(0);

  const calculateLove = (name1, name2) => {
    const combinedNames = name1.toLowerCase() + name2.toLowerCase();
    const frequency = {};
    for (const char of combinedNames) {
      if (char !== " ") {
        frequency[char] = (frequency[char] || 0) + 1;
      }
    }

    const counts = Object.values(frequency);

    while (counts.length > 2) {
      const newCounts = [];
      let start = 0,
        end = counts.length - 1;

      while (start <= end) {
        if (start === end) {
          newCounts.push(counts[start]);
        } else {
          newCounts.push(counts[start] + counts[end]);
        }
        start++;
        end--;
      }

      counts.splice(0, counts.length, ...newCounts);
    }
    setPercentage(parseInt(counts.join(""), 10));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-center bg-cover bg-[url('https://c4.wallpaperflare.com/wallpaper/204/497/101/heart-love-romance-dark-background-feelings-wallpaper-preview.jpg')]">
      <div className="z-20 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-pink-400 mb-6">
          Love Percentage Calculator
        </h1>
        <div className="space-y-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 bg-gray-900 text-gray-300 border border-gray-700 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="text"
            value={partner}
            onChange={(e) => setPartner(e.target.value)}
            placeholder="Enter your partner's name"
            className="w-full px-4 py-2 bg-gray-900 text-gray-300 border border-gray-700 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={() => calculateLove(name, partner)}
            className="w-full py-2 bg-pink-500 text-gray-200 font-bold rounded-lg hover:bg-pink-600 transition duration-300 hover:shadow-lg hover:shadow-pink-500/50"
          >
            Calculate
          </button>
        </div>
        <p className="text-center text-3xl font-semibold text-pink-400 mt-6">
          {percentage > 0
            ? `${percentage}%`
            : "Your love score will appear here."}
        </p>
      </div>
    </div>
  );
};

export default App;
