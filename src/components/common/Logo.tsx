import React from 'react';
import { RiMovie2AiFill } from "react-icons/ri";

interface LogoProps {
    className?: string;
    iconClassName?: string;
    textClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ className, iconClassName, textClassName }) => {
    return (
        <div className={className || "logo-section"}>
            <RiMovie2AiFill className={iconClassName || "logo-icon"} />
            <h1 className={textClassName || "logo-text"}>MovieApp</h1>
        </div>
    );
};

export default Logo;
