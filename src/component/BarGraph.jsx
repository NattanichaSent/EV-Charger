import { useState, useEffect, useRef } from 'react';
import { BarChart } from "@mui/x-charts/BarChart";

export default function BarGraph() {
    const containerRef = useRef(null);
    const [size, setSize] = useState({ width: 620, height: 300 });

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            if (entries[0]) {
                setSize({
                    width: entries[0].contentRect.width, // ปรับความกว้างตามขนาดของคอนเทนเนอร์
                    height: 300, // หรือปรับความสูงตามต้องการ
                });
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div
            ref={containerRef} // ใส่ ref เพื่อสังเกตขนาดของคอนเทนเนอร์
            className="p-3 rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.10)] w-auto "
        >
            <p className='text-left'>Average Charging Time (Mins)</p>
            <BarChart
                xAxis={[{
                    scaleType: "band",
                    data: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%"],
                    sx: {
                        ".MuiChartsAxis-tickLabel": { fill: "#979797" },
                        ".MuiChartsAxis-line": { stroke: "#e0e0e0", strokeWidth: 1 },
                        ".MuiChartsAxis-tick": { stroke: "#e0e0e0", strokeWidth: 1 },
                    },
                }]}
                yAxis={[{
                    min: 0,
                    max: 200,
                    tickNumber: 6,
                    sx: {
                        '.MuiChartsAxis-tickLabel': { fill: "#979797" },
                        ".MuiChartsAxis-line": { stroke: "#e0e0e0", strokeWidth: 1 },
                        ".MuiChartsAxis-tick": { stroke: "#e0e0e0", strokeWidth: 1 },
                    },
                }]}
                series={[{ data: [35, 150, 90, 25, 120, 180, 35, 110, 90, 60], color: "#4880FF" }]}
                width={size.width} // ใช้ค่า width ที่ปรับได้ตามขนาดคอนเทนเนอร์
                height={size.height} // ความสูงคงที่หรือปรับได้ตามที่ต้องการ
                className=" w-full"
            />
        </div>
    );
}
