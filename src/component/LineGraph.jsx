import { useState, useEffect, useRef } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

function LineGraph() {
    const containerRef = useRef(null);
    const [size, setSize] = useState({ width: 500, height: 300 });

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            if (entries[0]) {
                setSize({ width: entries[0].contentRect.width, height: 210 });
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="p-3 rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.10)] w-auto">
            <p className='text-left'>Current Power Usage (kW) </p>
            <LineChart
                xAxis={[
                    {
                        data: [1, 2, 3, 5, 8, 10],
                        scaleType: "linear", // ใช้ linear scale
                        min: 1, // กำหนดค่าต่ำสุดของแกน X
                        max: 10, // กำหนดค่าสูงสุดของแกน X
                        tickNumber: 10, // กำหนดให้มี tick มากพอให้ระยะห่าง 0.5
                    }
                ]}
                yAxis={[
                    {

                        min: 250, // กำหนดค่าต่ำสุดของแกน Y
                        max: 3000, // กำหนดค่าสูงสุดของแกน Y
                        tickNumber: 5, // จำนวนค่าที่แสดงบนแกน Y
                    }
                ]}
                series={[
                    {
                        data: [350, 750, 2000, 1750, 2500, 1200],
                        area: true,
                    },
                ]}
                width={size.width}
                height={size.height}
                className=''
            />

        </div>
    );
}

export default LineGraph;
