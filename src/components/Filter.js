import React from "react";

const Filter = ({ icon, title }) => {
  return (
    <div className="flex justify-center items-center text-black bg-[#ffffff] hover:bg-gray-200 hover:text-[#000000] duration-500 pl-2 pr-2 py-1 rounded-full font-semibold hover:font-bold">
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default Filter;