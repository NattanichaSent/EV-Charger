import { Bars3Icon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/16/solid";
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
                    <button className="w-6 h-6 text-secondary flex items-center cursor-pointer" strokeWidth={1}>
                        <BellIcon />
                    </button>
                    <ProfileNavbar />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
