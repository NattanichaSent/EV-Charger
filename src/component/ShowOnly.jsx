import Divider from "@mui/material/Divider";
import EVStatus from "./EVStatus";
import EVData from "../data/EVData";

// ฟังก์ชันสำหรับแบ่งข้อมูลเป็นกลุ่ม
const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

function ShowOnly() {
    // แบ่ง EVData ออกเป็นกลุ่มละ 4 ตัว
    const chunkedData = chunkArray(EVData, 4);

    return (
        <div>
            <div className="flex flex-col ">
                <Divider className="!border-gray-300" />
                <p className="flex justify-start my-5 font-semibold">EV Charger Rail 1</p>
                {/* แถวที่ 1 */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 ">
                    {chunkedData[0] && chunkedData[0].map((ev, index) => (
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
                {/* <p className="flex justify-start my-5 font-semibold">EV Charger Rail 2</p> */}
                {/* แถวที่ 2 */}
                {chunkedData[1] && (
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 mt-2 mb-5">
                        {chunkedData[1].map((ev, index) => (
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
                )}

                {/* Divider */}
                <Divider className="!border-gray-300" />
            </div>
        </div>
    );
}

export default ShowOnly;
