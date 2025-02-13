import StatusBlock from "../component/StatusBlock";
import {
    ServerIcon,
    CheckIcon,
    BoltIcon,
    UserIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";


function Status() {
    return (
        <div className="flex  justify-between w-full h-fit space-x-[20px] ">
            <StatusBlock
                title="Total"
                count={20}
                percent={null}
                percentColor={"text-green-500"}
                description="EV Chargers"
                icon={ServerIcon}
                iconTextColor="text-secondary"
                iconBgColor="bg-bgBlue"
            />
            <StatusBlock
                title="Available"
                count={8}
                percent={40}
                percentColor={"text-checkIcon"}
                description="of EV Chargers"
                icon={CheckIcon}
                iconTextColor="text-checkIcon"
                iconBgColor="bg-bgGreen"
            />
            <StatusBlock
                title="Charging"
                count={5}
                percent={25}
                percentColor={"text-boltIcon"}
                description="of EV Chargers"
                icon={BoltIcon}
                iconTextColor="text-boltIcon"
                iconBgColor="bg-bgYellow"
            />
            <StatusBlock
                title="Reserved"
                count={4}
                percent={20}
                percentColor={"text-reservedIcon"}
                description="of EV Chargers"
                icon={UserIcon}
                iconTextColor="text-reservedIcon"
                iconBgColor="bg-bgSky"
            />
            <StatusBlock
                title="Unavailable"
                count={3}
                percent={15}
                percentColor={"text-xIcon"}
                description="of EV Chargers"
                icon={XMarkIcon}
                iconTextColor="text-xIcon"
                iconBgColor="bg-bgRed"
            />
        </div>
    );
}

export default Status;
