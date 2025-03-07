import { useState } from "react";
import FilterButton from "../component/FilterButton";
import Status from "../component/Status";
import TopBar from "../component/TopBar";
import SideBar from "../component/SideBar";
import PowerMeter from "../component/PowerMeter";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import LineGraph from "../component/LineGraph";
import BarGraph from "../component/BarGraph";
import PieGraph from "../component/PieGraph";
import StationStatus from "../component/StationStatus";

function Operation() {
    // State สำหรับควบคุมการแสดงผลของกราฟแต่ละตัว
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
            <TopBar className="fixed top-0 left-0 w-full bg-red-500 z-10" />
            <div className="flex pt-16 pb-10">
                <div className="hidden lg:block">
                    <SideBar className="fixed top-16 left-0 bottom-0 z-10" />
                </div>
                <div className="w-full lg:pl-[300px] lg:pr-10 lg:mt-5 md:px-10 md:mt-2 bg-background">
                    <div className="flex justify-between w-full h-fit mb-5">
                        <p className="font-bold text-2xl text-start">Operation Dashboard</p>
                        {/* ส่ง state และฟังก์ชัน update ไปให้ FilterButton */}
                        <FilterButton showGraphs={showGraphs} onFilterChange={updateGraphs} />
                    </div>
                    <div className="flex flex-col ">
                        {showGraphs.status && (
                            <div className="mb-5">
                                <Status />
                            </div>)}
                        <div className="lg:grid lg:grid-cols-5 gap-x-5">
                            <div className="lg:grid-cols-1 lg:col-span-1 h-full md:grid md:grid-cols-3 md:gap-5">
                                <div className="flex flex-col justify-between  h-full md:col-span-1 ">
                                    {showGraphs.line && (
                                        <PowerMeter
                                            label="Current Power Usage"
                                            icon={ArrowTrendingUpIcon}
                                            iconColor="text-yellow-500"
                                            power={750}
                                            unit="kW"
                                            description="Real-time updated"
                                        />)}
                                    {showGraphs.totalPower && (
                                        <div className="mb-5">
                                            <PowerMeter
                                                label="Total Power Consumption"
                                                power={3500}
                                                unit="kWh"
                                                description="Last updated 3 mins ago"
                                            />
                                        </div>
                                    )}
                                </div>
                                {showGraphs.pie && (
                                    <div className="lg:hidden md:col-span-2 ">
                                        <PieGraph />
                                    </div>
                                )}
                            </div>
                            {showGraphs.line && (
                                <div className="w-full h-full lg:col-span-4 mb-5">
                                    <LineGraph />
                                </div>
                            )}
                        </div>
                        <div className="lg:grid lg:grid-cols-5 gap-5 w-full">
                            {showGraphs.bar && (
                                <div className="col-span-3 mb-5">
                                    <BarGraph />
                                </div>
                            )}
                            {showGraphs.pie && (
                                <div className="hidden md:hidden lg:block w-full col-span-2 mb-5">
                                    <PieGraph />
                                </div>
                            )}
                        </div>
                        {showGraphs.station && (
                            <div className="h-full w-full ">
                                <StationStatus />
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Operation;
