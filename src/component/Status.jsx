import StatusBlock from "../component/StatusBlock";
import StatusData from "../data/StatusData";
import {
    ServerIcon,
    CheckIcon,
    BoltIcon,
    UserIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
    ServerIcon,
    CheckIcon,
    BoltIcon,
    UserIcon,
    XMarkIcon,
};

function Status() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-5 w-full h-fit">
            {StatusData.map((item, index) => (
                <StatusBlock
                    key={index}
                    title={item.title}
                    count={item.count}
                    percent={item.percent}
                    percentColor={item.percentColor}
                    description={item.description}
                    icon={iconMap[item.icon]} // แปลงชื่อไอคอนให้เป็น component จริง
                    iconTextColor={item.iconTextColor}
                    iconBgColor={item.iconBgColor}
                    className={index === StatusData.length - 1 ? "md:col-span-2" : ""}
                />
            ))}
        </div>
    );
}

export default Status;
