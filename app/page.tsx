"use client";
import { useState } from "react";

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  const handleSwitchOn = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 gap-8">
      <div className="relative">
        <div
          className={`w-32 h-32 rounded-full 
            transition-all duration-300 
            border-4 
            ${isOn 
              ? 'bg-yellow-300 border-yellow-100' 
              : 'bg-gray-700 border-gray-600'
            }
            flex items-center justify-center
          `}
        >
          <div className={`
            w-24 h-24 
            rounded-full 
            transition-all duration-300
            ${isOn 
              ? 'bg-yellow-200' 
              : 'bg-gray-800'
            }
          `}/>
        </div>
        <div className="w-8 h-8 bg-gray-400 mx-auto rounded-b-lg"/>
      </div>
      <button
        onClick={handleSwitchOn}
        className={`h-10 w-24 rounded-full text-white transition-all duration-300 transform hover:scale-105 ${
          isOn
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}
