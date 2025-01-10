"use client";

import { useState } from "react";

const CostEstimator = () => {
  const [dimensions, setDimensions] = useState({ length: 30, width: 60 });
  const [frostDepth, setFrostDepth] = useState("");
  const [duration, setDuration] = useState("");
  const [services, setServices] = useState({
    delivery: false,
    insulation: false,
    power: false,
    setup: false,
  });
  const [totalCost, setTotalCost] = useState(0);

  const handleServiceToggle = (service) => {
    setServices((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  const calculateCost = () => {
    if (!duration) return 0;
    let cost = 575 * parseInt(duration);
    if (services.delivery) cost += 250;
    if (services.insulation) cost += 150;
    if (services.setup) cost += 300;
    if (!services.power) cost += 200;
    setTotalCost(cost);
  };

  return (
    <div
      className= "min-h-screen bg-[#373737] p-4 md:p-24 font-sans"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white font-bold text-lg md:text-xl mb-0 px-4 md:px-0">
          Estimate Your Project Costs
        </h2>
        <h1 className="text-[#FF4001] text-4xl md:text-5xl font-semibold mb-4 md:mb-8 px-4 md:px-0">
          Quick Cost Estimator
        </h1>

        <p className="text-white font-normal text-base md:text-lg mb-8 md:mb-12 max-w-6xl px-4 md:px-0">
          Use our simple calculator to estimate the cost of renting the E3000
          Hydronic Heater for your specific project needs. Enter your project
          details below to receive an instant preliminary quote.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16 px-4 md:px-0">
          <div className="relative">
            <label className="absolute -top-3 left-4 px-1 text-sm bg-[#373737] text-white">
              Area to be Thawed
            </label>
            <input
              type="text"
              placeholder="30x60"
              className="w-full p-2 border-2 border-[#FF4001] focus:outline-none placeholder-black"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              value={frostDepth}
              onChange={(e) => setFrostDepth(e.target.value)}
              className="w-full p-2 bg-white placeholder-black"
              placeholder="Frost Depth (inches)"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2 bg-white placeholder-black"
              placeholder="Duration (Days)"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-6 mb-8 md:mb-16 px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:gap-x-24">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-gray-500">
              <span className="text-[#FF4001] text-lg font-bold mb-2 md:mb-0">
                Delivery/Pickup
              </span>
              <div className="flex gap-4 w-full md:w-auto">
                <button
                  onClick={() => handleServiceToggle("delivery")}
                  className={`flex-1 md:flex-none px-2 py-2 border border-white font-bold ${
                    !services.delivery
                      ? "text-white"
                      : "bg-[#FF4001] text-white"
                  }`}
                >
                  No
                </button>
                <button
                  onClick={() => handleServiceToggle("delivery")}
                  className={`flex-1 md:flex-none px-2 py-2 ${
                    services.delivery
                      ? "bg-[#FF4001] text-white"
                      : "bg-[#FF4001] text-white font-bold"
                  }`}
                >
                  Yes
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-gray-500">
              <span className="text-[#FF4001] text-lg font-bold mb-2 md:mb-0">
                Power Availability
              </span>
              <div className="flex gap-4 w-full md:w-auto">
                <button
                  onClick={() => handleServiceToggle("power")}
                  className={`flex-1 md:flex-none px-2 py-2 border border-white font-bold ${
                    !services.power ? "text-white" : "bg-[#FF4001] text-white"
                  }`}
                >
                  No
                </button>
                <button
                  onClick={() => handleServiceToggle("power")}
                  className={`flex-1 md:flex-none px-2 py-2 ${
                    services.power
                      ? "bg-[#FF4001] text-white"
                      : "bg-[#FF4001] text-white font-bold"
                  }`}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:gap-x-24">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-gray-500">
              <span className="text-[#FF4001] text-lg font-bold mb-2 md:mb-0">
                Insulated Tarps
              </span>
              <div className="flex gap-4 w-full md:w-auto">
                <button
                  onClick={() => handleServiceToggle("insulation")}
                  className={`flex-1 md:flex-none px-2 py-2 border border-white font-bold ${
                    !services.insulation
                      ? "text-white"
                      : "bg-[#FF4001] text-white"
                  }`}
                >
                  No
                </button>
                <button
                  onClick={() => handleServiceToggle("insulation")}
                  className={`flex-1 md:flex-none px-2 py-2 ${
                    services.insulation
                      ? "bg-[#FF4001] text-white"
                      : "bg-[#FF4001] text-white font-bold"
                  }`}
                >
                  Yes
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-gray-500">
              <span className="text-[#FF4001] text-lg font-bold mb-2 md:mb-0">
                Setup of the Ground Thaw Equipment
              </span>
              <div className="flex gap-4 w-full md:w-auto">
                <button
                  onClick={() => handleServiceToggle("setup")}
                  className={`flex-1 md:flex-none px-2 py-2 border border-white font-bold ${
                    !services.setup ? "text-white" : "bg-[#FF4001] text-white"
                  }`}
                >
                  No
                </button>
                <button
                  onClick={() => handleServiceToggle("setup")}
                  className={`flex-1 md:flex-none px-2 py-2 ${
                    services.setup
                      ? "bg-[#FF4001] text-white"
                      : "bg-[#FF4001] text-white font-bold"
                  }`}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center px-4 md:px-0">
          <div className="text-[#FF4001] text-5xl md:text-6xl font-bold mb-6 md:mb-8">
            $ {totalCost.toFixed(2)}
          </div>
          <button
            onClick={calculateCost}
            className="bg-[#FF4001] text-white px-4 py-2 text-xl font-medium hover:bg-[#FF5001] w-full md:w-auto"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CostEstimator;
