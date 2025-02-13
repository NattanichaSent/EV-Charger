import FilterButton from "../component/FilterButton";
import Status from "../component/Status";
import TopBar from "../component/TopBar";
import SideBar from "../component/SideBar";
import PowerMeter from "../component/PowerMeter";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

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
                        <div className="flex mt-[20px]">
                            <div className="flex flex-col space-y-[20px] ">
                                <PowerMeter
                                    label="Current Power Usage"
                                    icon={ArrowTrendingUpIcon}
                                    iconColor="text-yellow-500"
                                    power={1200}
                                    unit="kW"
                                    description="Real-time updated"
                                />
                                <PowerMeter
                                    label="Total Power Consumption"
                                    power={1200}
                                    unit="kWh"
                                    description="Last updated 3 mins ago"
                                />
                            </div>
                            <div>
                                Graph
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Operation;
