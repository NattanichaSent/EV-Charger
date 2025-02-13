import { Bars3Icon } from "@heroicons/react/24/outline";
import SearchButton from "./SearchButton";
import ProfileNavbar from "./ProfileNavbar";

const TopBar = () => {
    return (
        <div className=" flex items-center lg:px-14 md:px-10">
            <button className="lg:hidden">
                <Bars3Icon className="h-6 w-6 text-icon mr-3" />
            </button>

            <div className="  py-5 flex justify-center items-center lg:mr-37">
                <h1 className="text-xl font-extrabold text-secondary">EV</h1>
                <h1 className="text-xl font-extrabold text-primary">Charger</h1>
            </div>

            <div className="hidden lg:flex   flex-1 justify-between items-center ">
                <SearchButton />
                <ProfileNavbar />
            </div>
        </div>
    );
};

export default TopBar;
