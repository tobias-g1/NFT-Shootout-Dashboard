import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router";


export const Header = ({ title }) => {
const navigate = useNavigate()

  return (
    <div className="text-primary flex justify-between items-end mb-4 flex-wrap">
      <div className="text-2xl">{title}</div>
      <div className="text-sm flex items-center">
        <div className="cursor-pointer" onClick={()=>navigate("/dashboard")}>{"Dashboard"}</div>
        <BiChevronRight />
        <div className="opacity-90">{title}</div>
      </div>
    </div>
  );
};