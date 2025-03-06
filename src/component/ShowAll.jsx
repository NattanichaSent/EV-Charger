import Divider from "@mui/material/Divider";
import EVStatus from "./EVStatus";
import EVData from "../data/EVData";


const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

function ShowAll() {
    // แบ่ง EVData ออกเป็นกลุ่มละ 4 ตัว
    const chunkedData = chunkArray(EVData, 4);

    // จำกัดแค่ 5 แถว (ไม่เกิน 20 ตัว)
    const limitedData = chunkedData.slice(0, 5);

    return (
        <div>
            <div className="flex flex-col ">
                <Divider className="!border-stroke" />
                <p className="flex justify-start mt-5 font-semibold">EV Charger Rail 1</p>

                {/* แสดงผลข้อมูลในแต่ละแถว */}
                <div className="mt-5">
                    {limitedData.map((chunk, rowIndex) => (
                        <div key={rowIndex} className="flex space-x-2 space-y-5">
                            {chunk.map((ev, index) => (
                                <EVStatus
                                    key={index}
                                    soc={ev.soc}
                                    remainingTime={ev.remainingTime}
                                    status={ev.status}
                                    evNo={ev.evNo}
                                    capMax={ev.capMax}
                                    socNo={ev.socNo}
                                    startTime={ev.startTime}
                                    endTime={ev.endTime}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <Divider className="!border-gray-300 " />
            </div>
        </div>
    );
}

export default ShowAll