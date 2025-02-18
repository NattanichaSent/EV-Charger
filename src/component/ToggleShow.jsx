import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import ShowOnly from "./ShowOnly";
import ShowAll from "./ShowAll";

function ToggleShow() {
    // กำหนดสถานะ toggle เริ่มต้นเป็น false (แสดง ShowOnly)
    const [isShowAll, setIsShowAll] = useState(false);

    const handleChange = (event) => {
        setIsShowAll(event.target.checked); // เปลี่ยนสถานะเมื่อ toggle
    };

    return (
        <div>
            <FormControlLabel
                label={isShowAll ? "Show All" : "Show Only"} // เปลี่ยนข้อความ label
                control={<Switch defaultChecked={false} onChange={handleChange} />} // สวิตช์เริ่มต้นปิด
                labelPlacement="start"
            />

            {/* แสดงผลคอมโพเนนต์ตามสถานะ toggle */}
            {isShowAll ? <ShowAll /> : <ShowOnly />}
        </div>
    );
}

export default ToggleShow;
