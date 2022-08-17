import { useField } from "formik";
import classNames from "classnames";

export const FormFileUpload = ({
  className,
  isRequired,
  label,
  placeholder = "",
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const handleChange = (ev) => {
    helpers.setValue(ev.target.value);
  };

  return (
    <div className={classNames("mt-4", { className })}>
      {label && (
        <div className="font-bold flex">
          <label className="">{label}</label>
          {isRequired && <div className="text-red-500 text-xl ml-1">*</div>}
        </div>
      )}
      <input
        type="file"
        className="file-upload cursor-pointer w-full outline-none border focus:border-info h-10 my-2 rounded "
        onChange={handleChange}
      />
      {meta.touched && meta.error && <div className="">{meta.error}</div>}
    </div>
  );
};
