import React from "react";

export default function Tips() {
  const examples = [
    "Add 2 milk",
    "Remove bread",
    "Set rice price to 50",
    "Find Amul under 200",
    "Mark eggs as bought",
  ];
  return (
    <div className="rounded-2xl border p-3 md:p-4 bg-white/70 backdrop-blur shadow-sm mb-4">
      <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">Quick voice tips</div>
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs md:text-sm">
        {examples.map((e, i) => (
          <li key={i} className="px-2 py-1 rounded-lg border text-gray-700 bg-gray-50">{e}</li>
        ))}
      </ul>
    </div>
  );
}
