import React from "react";

interface Props {
  title: string;
  url: string;
  icon: string;
}

function Button({ title, icon, url }: Props) {
  return (
    <a
      href={url}
      className="relative gap-5 before:before-btn after:after-btn font-studio-feixen-sans-variable lowercase font-bold variation-settings flex items-center justify-center bg-green border-solid border-black md:py-0 px-2  py-4 border-[5px] min-w-[300px]"
    >
      <span className="w-1/3 flex items-end justify-end">
        {icon}
      </span>
      <span className="w-1/2">{title}</span>
    </a>
  );
}

export default Button;
