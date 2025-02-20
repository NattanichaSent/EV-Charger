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
        <div
            className={`w-auto bg-background text-primary flex flex-col ${className}`}
        >
            <nav className="flex flex-col w-full font-semibold text-sm text-start flex-grow">
                <div className="w-full">
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

                {/* ปุ่ม Setting และ Logout จะอยู่ด้านล่างสุด */}
                <div className="border-t border-stroke mt-auto">
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
    );
}

export default SideBar;
