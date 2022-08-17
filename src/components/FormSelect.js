import { useField } from "formik";
import classNames from "classnames";

export const FormSelect = ({
  className,
  label,
  placeholder = "",
  isRequired = false,
  values = [],
  defaultValue,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className={classNames("flex flex-col", className )}>
    {label &&  <label className="font-bold text-sm mb-2">{label}</label>}
      <select className="select py-2 border outline-none border focus:border-info rounded" defaultValue={defaultValue} value={field.value} onChange={(ev)=> helpers.setValue(ev.target.value)}>
        {values.map((value, index) => (
          <option key={index}>{value}</option>
        ))}
      </select>
      {meta.touched && meta.error && (
        <div className="">{meta.error}</div>
      )}
    </div>
  );
};
