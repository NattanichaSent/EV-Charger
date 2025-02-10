import React, { useState } from "react";

const MenuButton = ({ Icon, text, href }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive); // สลับค่า true/false เพื่อเปลี่ยนสี
    };

    return (
        <a
            href={href || "#"}
            onClick={handleClick}
            className={`flex items-center pl-14 py-3 rounded-tr-lg rounded-br-lg cursor-pointer
        ${isActive ? "bg-[#0047AB] text-white" : "hover:bg-[rgba(0,71,171,0.6)] hover:text-white"}
      `}
        >
            {Icon && <Icon className="mr-4 h-6 w-6" />}
            {text}
        </a>
    );
};

export default MenuButton;
