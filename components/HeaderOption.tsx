import React from "react";

interface HeaderOption {
  Icon: React.ComponentType<{ className: string }>;
  title: string;
  selected?: boolean;
}

function HeaderOption({ Icon, title, selected }: HeaderOption) {
  return (
    <div
      className={`flex items-center space-x-1 pb-3 border-b-4 border-transparent cursor-pointer hover:text-blue-500 hover:border-blue-500 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
