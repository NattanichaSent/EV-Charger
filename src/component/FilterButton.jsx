import { useState } from "react";
import { BarsArrowDownIcon, ListBulletIcon } from "@heroicons/react/24/outline";

function FilterButton({ showGraphs, onFilterChange }) {
    const [isOpen, setIsOpen] = useState(false);

    // เปิด-ปิด popup
    const togglePopup = () => setIsOpen(!isOpen);

    // อัปเดตค่าการแสดงผลของกราฟ
    const handleCheckboxChange = (graphType) => {
        onFilterChange(graphType, !showGraphs[graphType]);
    };

    return (
        <div className="relative">
            {/* ปุ่ม Filter */}
            <div
                onClick={togglePopup}
                className="flex text-secondary bg-bgSky font-semibold hover:bg-hover cursor-pointer py-1 px-3 rounded-lg w-fit items-center"
            >
                <BarsArrowDownIcon className="w-5 h- mr-1" />
                <p className="">Feature</p>
                {/* <BarsArrowDownIcon className="w-6 h-6"/> */}
            </div>

            {/* Popup */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded-lg p-4 z-50">
                    <p className="text-sm font-semibold text-start">Filter Options</p>
                    <div className="mt-2 space-y-2">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={showGraphs.status}
                                onChange={() => handleCheckboxChange("status")}
                                className="w-4 h-4"
                            />
                            <span>EV Status</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={showGraphs.line}
                                onChange={() => handleCheckboxChange("line")}
                                className="w-4 h-4"
                            />
                            <span>Current Power Usage</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={showGraphs.totalPower}
                                onChange={() => handleCheckboxChange("totalPower")}
                                className="w-4 h-4"
                            />
                            <span>Total Power Consumption</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={showGraphs.bar}
                                onChange={() => handleCheckboxChange("bar")}
                                className="w-4 h-4"
                            />
                            <span>Average Charging Time</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={showGraphs.pie}
                                onChange={() => handleCheckboxChange("pie")}
                                className="w-4 h-4"
                            />
                            <span>Charger Utilization Rate</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={showGraphs.station}
                                onChange={() => handleCheckboxChange("station")}
                                className="w-4 h-4"
                            />
                            <span>EV Station Details</span>
                        </label>
                    </div>
                    <button
                        onClick={togglePopup}
                        className="mt-3 w-full bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-700 cursor-pointer"
                    >
                        Apply
                    </button>
                </div>
            )}
        </div>
    );
}

export default FilterButton;
