import { useState } from "react";
import StationOption from "../component/StationOption"; // ✅ Import component ใหม่
import FilterButton from "../component/FilterButton";
import Status from "../component/Status";
import TopBar from "../component/TopBar";
import SideBar from "../component/SideBar";
import PowerMeter from "../component/PowerMeter";
import { ArrowTrendingUpIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";
import LineGraph from "../component/LineGraph";
import BarGraph from "../component/BarGraph";
import PieGraph from "../component/PieGraph";
import StationStatus from "../component/StationStatus";


function Operation() {
    // เปลี่ยน selectedStation เป็นอาร์เรย์
    const [selectedStations, setSelectedStations] = useState([]); // ✅ เก็บหลายสถานี

    const [showGraphs, setShowGraphs] = useState({
        status: true,
        totalPower: true,
        line: true,
        bar: true,
        pie: true,
        station: true
    });

    // ฟังก์ชันอัปเดตค่าการแสดงผลของกราฟ
    const updateGraphs = (graphType, isVisible) => {
        setShowGraphs(prev => ({
            ...prev,
            [graphType]: isVisible
        }));
    };

    return (
        <div>
            <TopBar className="fixed top-0 left-0 w-full bg-white z-10" />
            <div className="flex pt-16 pb-10">
                <div className="hidden lg:block">
                    <SideBar className="fixed top-16 left-0 bottom-0 z-10" />
                </div>
                <div className="w-full lg:pl-[300px] lg:pr-10 lg:mt-0 md:px-10 md:mt-0 p-3 bg-background">
                    <div className="w-full h-fit mb-5">
                        <p className="font-bold text-2xl text-start">Operation Dashboard</p>
                    </div>
                    <div className="flex justify-between w-full h-fit mb-5 items-center">
                        <div className="flex gap-3 items-start text-secondary">
                            <BuildingOffice2Icon className="w-6 h-6" />
                            <p className="font-semibold text-lg text-start">

                                <span className="">
                                    {/* แสดงสถานีที่เลือก */}
                                    {selectedStations.length > 0
                                        ? selectedStations.join(", ")
                                        : "No Station Selected"}
                                </span>
                            </p>
                        </div>
                        <div className="lg:flex lg:gap-5 md:flex md:gap-5 hidden">
                            <StationOption
                                selectedStations={selectedStations}
                                onSelectStation={setSelectedStations} // ✅ ส่งฟังก์ชันไปให้เลือกสถานี
                            />
                            <FilterButton showGraphs={showGraphs} onFilterChange={updateGraphs} />
                        </div>
                    </div>

                    {/* ส่วนแสดงผลกราฟ */}
                    <div className="flex flex-col ">
                        {showGraphs.status && <div className="mb-5"><Status /></div>}
                        <div className="lg:grid lg:grid-cols-6 lg:space-x-5 mb-5">
                            <div className="lg:col-span-2 lg:flex lg:flex-col lg:justify-between md:grid md:grid-cols-3 md:space-x-5">
                                <div className="space-y-5 md:flex md:flex-col md:justify-between md:space-y-5 md:col-span-1 lg:w-full">
                                    {showGraphs.line && (
                                        <PowerMeter
                                            label="Current Power Usage"
                                            icon={ArrowTrendingUpIcon}
                                            iconColor="text-yellow-500"
                                            power={750}
                                            unit="kW"
                                            description="Real-time updated"
                                        />
                                    )}
                                    {showGraphs.totalPower && (
                                        <PowerMeter
                                            label="Total Power Consumption"
                                            power={3500}
                                            unit="kWh"
                                            description="Last updated 3 mins ago"
                                        />
                                    )}
                                </div>
                                {showGraphs.pie && <div className="lg:hidden md:col-span-2 my-5 md:my-0"><PieGraph /></div>}
                            </div>
                            {showGraphs.line && <div className="w-full h-full col-span-4 md:mt-5 lg:mt-0"><LineGraph /></div>}
                        </div>
                        <div className="lg:grid lg:grid-cols-5 gap-5 w-full">
                            {showGraphs.bar && <div className="col-span-3 mb-5"><BarGraph /></div>}
                            {showGraphs.pie && <div className="hidden md:hidden lg:block w-full col-span-2 mb-5"><PieGraph /></div>}
                        </div>
                        {showGraphs.station && <div className="h-full w-full"><StationStatus /></div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Operation;
