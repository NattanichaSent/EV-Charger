import React from "react";
import { BoltIcon, ChartBarIcon, ChartPieIcon, DocumentChartBarIcon, RectangleStackIcon } from "@heroicons/react/24/outline";
import MenuButton from "../component/MenuButton";

function Navbar() {
    return (
        <div className=" w-72 bg-white text-[#202224]  py-6 space-y-6 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out">
            <div className="flex justify-center">
                <h1 className="text-xl font-extrabold text-[#4880FF]  ">EV</h1>
                <h1 className="text-xl font-extrabold text-[#202224] ">Charger</h1>
            </div>
            <nav className="flex flex-col font-semibold text-sm">
                <MenuButton
                    Icon={BoltIcon}
                    text="Menu Station"
                    href="#menu"
                />
                <MenuButton
                    Icon={ChartBarIcon}
                    text="Operation Dashboard"
                    href="#menu"
                />
                <MenuButton
                    Icon={ChartPieIcon}
                    text="Management Dashboard"
                    href="#menu"
                />
                <MenuButton
                    Icon={DocumentChartBarIcon}
                    text="Billing Reports"
                    href="#menu"
                />
                <MenuButton
                    Icon={RectangleStackIcon}
                    text="History"
                    href="#menu"
                />
                <div className="mt-auto border-t border-gray-400 pt-4 flex items-center justify-between text-gray-500 px-4">
                    <span>© 2024 My App</span>
                    <button className="flex items-center text-red-500 hover:text-red-700">

                        Logout
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
