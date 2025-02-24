import { Bars3Icon, BellIcon as BellOutline } from "@heroicons/react/24/outline";
import { BellIcon as BellSolid } from "@heroicons/react/24/solid"; // ใช้ชื่ออื่นเพราะซ้ำกัน

import SearchButton from "./SearchButton";
import ProfileNavbar from "./ProfileNavbar";

const TopBar = ({ className }) => {
    return (
        <div className={`flex items-center lg:px-10 md:px-10 ${className}`}>
            <button className="lg:hidden">
                <Bars3Icon className="h-6 w-6 text-icon mr-3" />
            </button>

            <div className="py-5 flex justify-center items-center lg:mr-37">
                <h1 className="text-xl font-extrabold text-secondary">EV</h1>
                <h1 className="text-xl font-extrabold text-primary">Charger</h1>
            </div>

            <div className="hidden lg:flex flex-1 justify-between items-center">
                <SearchButton />
                <div className="flex items-center">
                    {/* ใช้ group เพื่อควบคุม hover */}
                    <div className="flex p-4 rounded-2xl hover:bg-bgHover items-center hover:cursor-pointer group ">
                        <button className="relative w-7 h-7 flex items-center cursor-pointer ">
                            {/* Default: Outline */}
                            <BellOutline className="w-7 h-7  group-hover:hidden" />
                            {/* Hover: Solid (เปลี่ยนสีเมื่อ hover) */}
                            <BellSolid className="w-7 h-7  group-hover:text-secondary hidden group-hover:block transition-all duration-200 ease-in-out" />
                        </button>
                        {/* <p className="font-semibold  group-hover:text-secondary transition-all duration-200 ease-in-out">
                            Notification
                        </p> */}
                    </div>
                    <ProfileNavbar />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
