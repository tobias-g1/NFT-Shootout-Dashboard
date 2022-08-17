import { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const DropDownNavLink = ({ icon, name, data }) => {
  const [accordionStatus, setAccordionStatus] = useState(false);
  
  return (
    <div className="mb-4">
      <button
        onClick={() => {
          setAccordionStatus(!accordionStatus);
        }}
        className="flex items-center justify-between w-full text-primary hover:text-link"
      >
        <div className="flex items-center">
          {icon}
          <div className="ml-4"> {name}</div>
        </div>
        {accordionStatus ? <BiChevronDown /> : <BiChevronRight />}
      </button>
      <div
        className={`ml-10 flex flex-col transition-height duration-1000 text-primary overflow-hidden ${
          accordionStatus ? "h-auto" : "h-0"
        }`}
      >
        {data.map((item, index) => (
          <NavLink className="mt-4 text-sm" to={item.path} key={index}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DropDownNavLink;
