
import PagePagination from "./PagePagination";

import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import ShowOnly from "./ShowOnly";
import ShowAll from "./ShowAll";

function StationStatus() {
    const [isShowAll, setIsShowAll] = useState(false);

    const handleChange = (event) => {
        setIsShowAll(event.target.checked);
    };
    return (
        <div className="p-3 rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.10)] h-full">
            {/* Header */}
            <div className="flex justify-between">
                <p>Station 1</p>
                <div>
                    <FormControlLabel
                        label={isShowAll ? "Show All" : "Show Only"} // เปลี่ยนข้อความ label
                        control={<Switch defaultChecked={false} onChange={handleChange} />} // สวิตช์เริ่มต้นปิด
                        labelPlacement="start"
                    />

                    {/* แสดงผลคอมโพเนนต์ตามสถานะ toggle */}

                </div>
            </div>
            <div className="">
                {isShowAll ? <ShowAll /> : <ShowOnly />}
            </div>


            {/* ใช้ Tailwind ปรับสีเส้นได้ */}
            <div className="flex justify-between  mt-5">
                <p>Showing 1 of 5</p>
                <PagePagination />
            </div>
        </div>
    );
}

export default StationStatus;
