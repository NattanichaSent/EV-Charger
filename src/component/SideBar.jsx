import {
    BoltIcon,
    ChartBarIcon,
    ChartPieIcon,
    DocumentChartBarIcon,
    RectangleStackIcon,
    Cog6ToothIcon,
    ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/outline";
import MenuButton from "../component/MenuButton";

function SideBar({ className }) {
    return (
        <div className={`w-72 text-primary h-full flex flex-col  transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out ${className}`}>

            <nav className="flex flex-col font-semibold text-sm h-screen justify-between">
                <div className="">
                    <MenuButton Icon={BoltIcon} text="Menu Station" href="#menu" />
                    <MenuButton
                        Icon={ChartBarIcon}
                        text="Operation Dashboard"
                        href="#menu"
                    />
                    <MenuButton
                        Icon={ChartPieIcon}
                        text="Management Dashboard"
                        href="#menu"
                    />
                    <MenuButton
                        Icon={DocumentChartBarIcon}
                        text="Billing Reports"
                        href="#menu"
                    />
                    <MenuButton Icon={RectangleStackIcon} text="History" href="#menu" />
                </div>
                <div className="mt-auto border-t border-stroke pt-5 ">
                    <MenuButton
                        Icon={Cog6ToothIcon}
                        text="Setting"
                        href="#menu"
                    />
                    <MenuButton
                        Icon={ArrowRightStartOnRectangleIcon}
                        text="Logout"
                        href="#menu"
                    />
                </div>
            </nav>
        </div>
    )
}

export default SideBar;
