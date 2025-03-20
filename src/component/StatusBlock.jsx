import { ServerIcon } from "@heroicons/react/24/outline";

function StatusIcon({
    Icon = null,
    textColor = "text-white",
    bgColor = "bg-gray-800",
}) {
    return (
        <div
            className={`p-2 h-11 w-11 rounded-lg flex items-center justify-center ${bgColor}`}
        >
            {Icon && <Icon className={`  h-7 w-7 ${textColor} `} stroke="currentColor" strokeWidth={1.7} />}
        </div>
    );
}

function StatusBlock({
    title = "Total",
    count = 20,
    percent = null,
    percentColor = "text-green-500",
    description = "EV Chargers",

    icon = ServerIcon,
    iconTextColor = "text-blue-500",
    iconBgColor = "bg-gray-200",
}) {
    return (
        <div className=" flex flex-col p-4 rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.10)] w-full hover:bg-bgHover">
            <div className="flex">
                <div className="flex flex-col text-left justify-between  w-full text-primary">
                    <p className="w-auto  text-sm font-semibold">{title}</p>
                    <p className="text-2xl font-bold">{count}</p>
                </div>

                <StatusIcon
                    Icon={icon}
                    textColor={iconTextColor}
                    bgColor={iconBgColor}
                />
            </div>
            <p className=" text-left text-sm text-icon">
                {percent !== null ? (
                    <span className={`font-semibold ${percentColor}`}>{percent}%</span>
                ) : null}{" "}
                {description}
            </p>
        </div>
    );
}

export default StatusBlock;
