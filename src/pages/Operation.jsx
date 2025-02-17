import FilterButton from "../component/FilterButton";
import Status from "../component/Status";
import TopBar from "../component/TopBar";
import SideBar from "../component/SideBar";
import PowerMeter from "../component/PowerMeter";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import LineGraph from "../component/LineGraph";
import BarGraph from "../component/BarGraph";
import PieGraph from "../component/PieGraph";

function Operation() {

    return (
        <div>
            <TopBar />
            <div className="flex ">
                <SideBar className="hidden lg:flex flex-shrink-0" />
                <div className="w-full">
                    <div className="flex  justify-between w-full h-fit lg:pr-14 lg:pl-[20px] lg:pt-[5px]">
                        <p className="font-bold text-2xl text-start">Operation Dashboard</p>
                        <FilterButton />
                    </div>
                    <div className="lg:pr-14 lg:pl-[20px] lg:pt-[15px]">
                        <Status />
                        <div className="flex flex-wrap md:flex-nowrap mt-5 justify-between gap-5 h-full">
                            {/* PowerMeter Section */}
                            <div className="flex flex-col  justify-between  w-full md:w-[30%] min-w-[280px] ">
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

                            {/* Graph Section */}
                            <div className="w-full md:w-[70%]">
                                <LineGraph />
                            </div>
                        </div>
                        <div className="flex mt-5 space-x-5 w-full h-fit">
                            <BarGraph />
                            <PieGraph />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Operation;
