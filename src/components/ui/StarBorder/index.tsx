import React, { ElementType, ReactNode } from "react";

interface StarBorderProps {
    as?: ElementType;
    className?: string;
    color?: string;
    speed?: string;
    children: ReactNode;
    [key: string]: any;
}

const StarBorder: React.FC<StarBorderProps> = ({
    as: Component = "button",
    className = "",
    color = "white",
    speed = "6s",
    children,
    ...rest
}) => {
    return (
        <Component
            className={`relative inline-block py-[1px] overflow-hidden rounded-[20px] ${className}`}
            {...rest}
        >
            <div
                className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div
                className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div className="relative z-1 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-xs py-[5px] px-[15px] rounded-[20px]">
                {children}
            </div>
        </Component>
    );
};

export default StarBorder;
