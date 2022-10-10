import { NavLink } from "react-router-dom";

const MobileDropDownNavLink = ({ name, icon, data }) => {
  return (
    <div className="relative mobile-link cursor-pointer text-primary hover:text-link ">
      <div className="mx-6 my-8"> {icon}</div>
      <div
        className="mobile-link-dropdown absolute top-min-4 left-full transform w-40
        "
      >
        <div className="bg-gray-100 px-4 py-4 text-fifth">{name}</div>
        <div className="bg-white px-4 py-2 shadow-dropdown text-black flex flex-col">
          {data.map((item, index) => (
            <NavLink
              className="py-2 text-sm hover:text-link"
              to={item.path}
              key={index}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileDropDownNavLink;
