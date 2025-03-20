import PagePagination from "./PagePagination";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import ShowOnly from "./ShowOnly";
import ShowAll from "./ShowAll";
import Typography from '@mui/material/Typography';

function StationStatus() {
    const [isShowAll, setIsShowAll] = useState(false);

    const handleChange = (event) => {
        setIsShowAll(event.target.checked);
    };
    return (
        <div className="p-3 rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.10)] h-full hover:bg-bgHover">
            {/* Header */}
            <div className="flex justify-between text-lg font-semibold items-center ">
                <p className="text-xl">Station 1</p>
                <div>
                    <div>
                        <FormControlLabel
                            label={
                                <Typography className="text-icon"
                                    sx={{
                                        fontFamily: "'Nunito Sans', sans-serif",
                                        fontSize: '15px',
                                        fontWeight: 'semibold',


                                    }}
                                >
                                    {isShowAll ? "Show All" : "Show Only"}
                                </Typography>
                            }
                            control={<Switch defaultChecked={false} onChange={handleChange} />}
                            labelPlacement="start"
                        />
                    </div>


                    {/* แสดงผลคอมโพเนนต์ตามสถานะ toggle */}

                </div>
            </div>

            <div className="">

                {isShowAll ? <ShowAll /> : <ShowOnly />}
            </div>


            {/* ใช้ Tailwind ปรับสีเส้นได้ */}
            <div className="flex justify-between lg:text-[15px] md:text-md text-sm text-icon items-end">
                <p>Showing 1 of 5</p>
                <PagePagination />
            </div>
        </div>
    );
}

export default StationStatus;
