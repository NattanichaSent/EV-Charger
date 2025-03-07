import { useState } from "react";

const MenuButton = ({ Icon, text, href, className }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <a
            href={href || "#"}
            onClick={handleClick}
            className={`flex items-center pl-10 py-3 pr-5 rounded-tr-lg rounded-br-lg cursor-pointer bg-background
        ${isActive ? "bg-secondary text-onclickText" : "hover:bg-hover hover:text-onclickText"} 
        ${className || ""}`}
        >
            {Icon && <Icon className="mr-4 h-6 w-6" />}
            {text}
        </a>
    );
};

export default MenuButton;
