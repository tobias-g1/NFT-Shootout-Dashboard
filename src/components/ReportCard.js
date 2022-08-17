import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

export const ReportCard = ({ data, className = "" }) => {
  const { title, value, deviation } = data;

  return (
    <div
      className={`border px-4 py-8 flex flex-col justify-center items-center rounded ${className}`}
    >
      <div className="text-2xl font-marcellus">{value}</div>
      <div className="text-sm my-2 text-center">{title}</div>
      {deviation && (
        <div
          className={`flex text-sm rounded p-1 ${
            deviation > 0
              ? "text-success bg-softSuccess"
              : "bg-softDanger text-danger"
          }`}
        >
          {deviation > 0 ? (
            <MdArrowDropUp size="20" />
          ) : (
            <MdArrowDropDown size="20" />
          )}
          {deviation > 0 ? deviation : -deviation}%
        </div>
      )}
    </div>
  );
};