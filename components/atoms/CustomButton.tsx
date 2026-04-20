import React from "react";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "black";
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-5 py-3 font-bold cursor-pointer rounded-sm transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-white text-gray-900 hover:bg-gray-200 shadow-sm",
    secondary:
      "bg-white/10 text-white border border-white/40 hover:border-white/80 hover:bg-white/20 backdrop-blur-sm",
    black:
      "bg-black text-white hover:border-1 transition-all hover:bg-white hover:text-black shadow-sm ",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
