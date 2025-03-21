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
            <div className="flex flex-col">


                {/* ใช้ Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-2 md:grid-cols-2 my-5 ">
                    {limitedData.flat().map((ev, index) => (
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

                <Divider className="!border-gray-300 " />
            </div>
        </div>
    );
}

export default ShowAll;
