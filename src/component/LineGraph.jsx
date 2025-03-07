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
        <div ref={containerRef} className="p-3 rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.10)] w-auto hover:bg-bgHover">
            <p className='text-left'>Current Power Usage (kW) </p>
            <LineChart
                xAxis={[
                    {
                        data: [
                            new Date("2025-02-17T00:00:00"),
                            new Date("2025-02-17T03:00:00"),
                            new Date("2025-02-17T06:00:00"),
                            new Date("2025-02-17T09:00:00"),
                            new Date("2025-02-17T12:00:00"),
                            new Date("2025-02-17T15:00:00"),
                            new Date("2025-02-17T18:00:00"),
                            new Date("2025-02-17T21:00:00"),
                            new Date("2025-02-17T24:00:00"),
                        ],
                        scaleType: "time",

                        tickFormatter: (value) => {
                            const hours = value.getHours();
                            const minutes = value.getMinutes();
                            return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
                        },
                        sx: {
                            '.MuiChartsAxis-tickLabel': { fill: "#979797" },
                            ".MuiChartsAxis-line": { stroke: "#e0e0e0", strokeWidth: 1 },
                            ".MuiChartsAxis-tick": { stroke: "#e0e0e0", strokeWidth: 1 },
                        }
                    }
                ]}
                yAxis={[
                    {
                        min: 250,
                        max: 3000,
                        tickNumber: 5,
                        sx: {
                            '.MuiChartsAxis-tickLabel': { fill: "#979797" },
                            ".MuiChartsAxis-line": { stroke: "#e0e0e0", strokeWidth: 1 },
                            ".MuiChartsAxis-tick": { stroke: "#e0e0e0", strokeWidth: 1 },
                        }
                    }
                ]}
                series={[
                    {
                        data: [350, 750, 2000, 1750, 2500, 1200, 1000, 2470, 1234],
                        area: true,
                        color: "#4880FF", // สีของเส้นกราฟ
                        areaStyle: {
                            color: "rgba(72, 128, 255, 0.2)", // เปลี่ยนสีพื้นที่ใต้เส้นกราฟ (สีฟ้าสดใสพร้อมความโปร่งใส)
                        },
                        showMark: false,
                        tooltip: {
                            trigger: "axis",
                            formatter: (params) => {
                                const xValue = params[0]?.axisValue;
                                const yValue = params[0]?.value;
                                return `เวลา: ${xValue.toLocaleString()} | กำลังไฟฟ้า: ${yValue} kW`;
                            },
                        },
                    }
                ]}
                width={size.width}
                height={size.height}

            />
        </div>
    );
}

export default LineGraph;
