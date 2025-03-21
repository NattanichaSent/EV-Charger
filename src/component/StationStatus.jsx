import PagePagination from "./PagePagination";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import ShowOnly from "./ShowOnly";
import ShowAll from "./ShowAll";
import Typography from '@mui/material/Typography';
import stationsData from "../data/StationData";
import Divider from "@mui/material/Divider";

function StationStatus() {
    const [isShowAll, setIsShowAll] = useState(false);
    const station = stationsData[0];

    const handleChange = (event) => {
        setIsShowAll(event.target.checked);

    };
    return (
        <div className="p-3 rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.10)] h-full hover:bg-bgHover">
            {/* Header */}
            <div className="flex justify-between text-lg font-semibold items-center ">
                <p className="text-xl">{station?.name || "Unknown Station"}</p>
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
            </div>
            <Divider className="!border-stroke" />
            <p className="flex justify-start mt-5 font-semibold">{station?.rail || "Unknown Station"}</p>
            <div className="">
                {isShowAll ? <ShowAll /> : <ShowOnly />}
            </div>


            {/* ใช้ Tailwind ปรับสีเส้นได้ */}
            <div className="flex justify-between lg:text-[15px] md:text-md text-sm text-icon items-end mb-1">
                <p>Showing 1 of {stationsData.length}</p>
                <PagePagination />
            </div>
        </div>
    );
}

export default StationStatus;
