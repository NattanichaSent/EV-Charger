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
    return (
        <div>
            {/* TopBar */}
            <TopBar className="fixed top-0 left-0 w-full bg-white z-10" />

            <div className="flex pt-16 pb-10">
                {/* SideBar (ซ่อนใน sm และ md, แสดงใน lg ขึ้นไป) */}
                <div className="hidden lg:block">
                    <SideBar className="fixed top-16 left-0 bottom-0 z-10" />
                </div>

                {/* ปรับ padding-left เฉพาะเมื่อจอใหญ่ */}
                <div className="w-full lg:pl-[300px] lg:pr-10 lg:mt-5 md:px-10 md:mt-2 bg-background">
                    <div className="flex justify-between w-full h-fit">
                        <p className="font-bold text-2xl text-start">Operation Dashboard</p>
                        <FilterButton />
                    </div>
                    <div className="flex flex-col mt-5 gap-5 ">
                        <Status />
                        <div className="lg:grid lg:grid-cols-5 gap-x-5">
                            {/* PowerMeter Section */}
                            <div className="lg:grid-cols-1 lg:col-span-1 h-full md:grid md:grid-cols-3 md:gap-5">
                                <div className="flex flex-col justify-between h-full md:col-span-1">
                                    <PowerMeter
                                        label="Current Power Usage"
                                        icon={ArrowTrendingUpIcon}
                                        iconColor="text-yellow-500"
                                        power={750}
                                        unit="kW"
                                        description="Real-time updated"
                                    />
                                    <PowerMeter
                                        label="Total Power Consumption"
                                        power={3500}
                                        unit="kWh"
                                        description="Last updated 3 mins ago"
                                    />
                                </div>

                                <div className="lg:hidden md:col-span-2">
                                    <PieGraph />
                                </div>
                            </div>



                            {/* Graph Section */}
                            <div className="w-full h-full lg:col-span-4">
                                <LineGraph />
                            </div>
                        </div>
                        <div className="lg:grid lg:grid-cols-5 gap-5 w-full">
                            <div className="col-span-3">
                                <BarGraph />
                            </div>

                            <div className="hidden md:hidden lg:block w-full col-span-2">
                                <PieGraph />
                            </div>
                        </div>

                        <div className="h-full w-full">
                            <StationStatus />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Operation;
