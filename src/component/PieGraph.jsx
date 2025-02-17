import { PieChart } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "../Animation/WebUsageStats";

function PieGraph() {
    return (
        <div className="p-3 rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.10)] w-full ">
            <p className='text-left'>Charger Utilization Rate (%)</p>
            <PieChart
                series={[
                    {
                        data: desktopOS,
                        highlightScope: { fade: "global", highlight: "item" },
                        faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                        valueFormatter,
                    },
                ]}
                height={280}
                className="mt-3"
            />
        </div>
    );
}

export default PieGraph;
