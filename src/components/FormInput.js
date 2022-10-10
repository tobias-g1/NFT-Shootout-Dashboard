import { useField } from "formik";
import classNames from "classnames";

export const FormInput = ({
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
        className="w-full outline-none border focus:border-info px-3 py-2 rounded "
        value={field?.value || ""}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && (
          <div className="">{meta.error}</div>
      )}
    </div>
  );
};
