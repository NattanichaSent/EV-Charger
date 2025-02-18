import { BoltIcon } from "@heroicons/react/24/outline";

const EVStatus = ({
    soc,
    remainingTime,
    status = "Charging", // ค่าเริ่มต้นเป็น Charging
    bgCharging = "bg-boltIcon",
    bgRemaining = "bg-bgYellow",
    bgStatus = "bg-bgYellow",
    textColor = "text-primary",
    evNo = "EV1-001",
    capMax = "200 kW",
    socNo = "SOC No.8",
    startTime = "2025-01-04 04:00",
    endTime = "2025-01-04 04:20",
}) => {
    const isUnavailable = status === "Unavailable";
    const isReserved = status === "Reserved";
    const isAvailable = status === "Available";

    // เปลี่ยนสีไฟสถานะตามเงื่อนไข
    const dynamicBgStatus = isUnavailable
        ? "bg-bgRed" // สีแดงถ้าไม่พร้อมใช้งาน
        : isReserved
            ? "bg-bgSky" // สีฟ้าถ้าถูกจอง
            : isAvailable
                ? "bg-bgGreen" // สีเขียวถ้าพร้อมใช้งาน
                : bgStatus; // สีพื้นฐานที่ส่งมา

    return (
        <div className="w-full h-full">
            {/* หัวข้อ EV No. และ Cap Max */}
            <label
                className={`flex justify-between text-[10px] font-semibold ${isUnavailable
                    ? "text-xIcon"
                    : isReserved
                        ? "text-reservedIcon"
                        : isAvailable
                            ? "text-checkIcon"
                            : "text-primary"
                    }`}
            >
                <div className="flex items-center">
                    <p>{evNo} </p>
                    <div className={`w-2 h-2 ${dynamicBgStatus} rounded-full ml-1`}></div>
                </div>
                <p>Cap Max : {capMax}</p>
            </label>

            {/* ส่วนแสดงสถานะการชาร์จ */}
            <div
                className={`relative w-full ${isUnavailable
                    ? "bg-bgRed"
                    : isReserved
                        ? "bg-bgSky"
                        : isAvailable
                            ? "bg-bgGreen"
                            : bgRemaining
                    } rounded-xl h-full`}
            >
                {isUnavailable ? (
                    <div className="h-full flex items-center justify-center text-xIcon font-bold text-sm p-3.5">
                        Unavailable
                    </div>
                ) : isReserved ? (
                    <div className="h-full flex items-center justify-center text-reservedIcon font-bold text-sm p-3.5">
                        Reserved
                    </div>
                ) : isAvailable ? (
                    <div className="h-full flex items-center justify-center text-checkIcon font-bold text-sm p-3.5">
                        Available
                    </div>
                ) : (
                    <>
                        <div
                            className={`${bgCharging} h-full rounded-xl p-6 flex items-center`}
                            style={{ width: `${soc}%` }}
                        ></div>
                        <div
                            className={`absolute inset-0 flex justify-between items-center px-6 py-2 text-xs ${textColor}`}
                        >
                            <div className="flex items-center">
                                <BoltIcon className="h-6 w-6" />
                                <div className="flex flex-col text-[11px]">
                                    <span className="font-bold text-[14px]">{soc}%</span>
                                    <span>111.8 kW</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">{remainingTime}</span>
                                <p>remaining</p>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* ส่วนแสดง SOC No. และเวลา */}
            <div
                className={`flex justify-between text-[10px] font-semibold ${isUnavailable
                    ? "text-xIcon"
                    : isReserved
                        ? "text-reservedIcon"
                        : isAvailable
                            ? "text-checkIcon"
                            : "text-primary"
                    }`}
            >
                <p>{isUnavailable ? "Currently unavailable" : socNo}</p>
                {!isUnavailable && !isReserved && !isAvailable && (
                    <div className="flex text-icon">
                        <p>{startTime}</p>
                        <p className="px-1">|</p>
                        <p>{endTime}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EVStatus;