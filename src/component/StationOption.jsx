import { useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import stationsData from "../data/StationData";

function StationOption({ selectedStations, onSelectStation }) {
    const [isOpen, setIsOpen] = useState(false);

    // ฟังก์ชันเปิด/ปิด popup
    const togglePopup = () => setIsOpen(!isOpen);

    // ฟังก์ชันอัปเดตสถานีที่เลือก
    const handleStationChange = (stationName) => {
        if (stationName === "All") {
            // เลือกทุกสถานี
            if (selectedStations.length === stationsData.length) {
                onSelectStation([]); // ถ้าเลือกครบแล้ว ให้ยกเลิกการเลือกทั้งหมด
            } else {
                onSelectStation(stationsData.map((station) => station.name)); // เลือกทุกสถานี
            }
        } else {
            // หากเลือกสถานีอื่นๆ
            if (selectedStations.includes(stationName)) {
                // หากสถานีนี้ถูกเลือกอยู่แล้ว, ลบออกจาก array
                onSelectStation(selectedStations.filter((station) => station !== stationName));
            } else {
                // หากสถานีนี้ยังไม่ถูกเลือก, เพิ่มเข้าไปใน array
                onSelectStation([...selectedStations, stationName]);
            }
        }
    };

    return (
        <div className="relative ">
            <div
                onClick={togglePopup}
                className="flex text-secondary bg-bgSky font-semibold hover:bg-hover cursor-pointer py-1 px-3 rounded-lg w-fit items-center"
            >
                <MapPinIcon className="w-5 h-5 mr-1 font-bold" strokeWidth={1.8} />
                <p className="">Station</p>
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded-lg p-4 z-50 ">
                    <p className="text-sm font-semibold text-start">Select Stations</p>
                    <div className="mt-2 space-y-2">
                        {/* เพิ่มตัวเลือก "All" */}
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedStations.length === stationsData.length} // เช็คว่าทุกสถานีถูกเลือกแล้วหรือยัง
                                onChange={() => handleStationChange("All")} // เลือก/ยกเลิกเลือกทุกสถานี
                                className="w-4 h-4"
                            />
                            <span>All</span>
                        </label>

                        {/* แสดงสถานีแต่ละตัว */}
                        {stationsData.map((station) => (
                            <label key={station.id} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={selectedStations.includes(station.name)} // เช็คสถานีที่ถูกเลือก
                                    onChange={() => handleStationChange(station.name)} // อัปเดตเมื่อมีการเปลี่ยนแปลง
                                    className="w-4 h-4"
                                />
                                <span>{station.name}</span>
                            </label>
                        ))}
                    </div>
                    <button
                        onClick={togglePopup}
                        className="mt-3 w-full bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-700"
                    >
                        Apply
                    </button>
                </div>
            )}
        </div>
    );
}

export default StationOption;
