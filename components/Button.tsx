import React from "react";

interface ButtonProps {
  bgColor: string;
  url: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  bgColor,
  url,
  children,
}: ButtonProps) => {
  return (
    <div className="flex basis-1/6 items-center justify-center">
      <a href={url} target={"_blank"}>
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          style={{ backgroundColor: bgColor }}
        >
          {children}
        </button>
      </a>
    </div>
  );
};

export default Button;
