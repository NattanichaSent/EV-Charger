import React from "react";

import FilterButton from "../component/FilterButton";
import Status from "../component/Status";
import TopBar from "../component/TopBar";
import SideBar from "../component/SideBar";
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
                    <Status />
                </div>
            </div>

        </div>
    );
}

export default Operation;
