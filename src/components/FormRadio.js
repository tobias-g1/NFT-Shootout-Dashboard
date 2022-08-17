import React from "react";
import classNames from "classnames";
import { useField } from "formik";

export const FormRadio = ({
  className,
  label,
  values = [],
  ...props
}) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className={classNames("mt-4", className)}>
        <div className="font-bold mb-2">{label}</div>
      <div className={classNames("flex")}>
        {values.map(({ title, id: itemVal }) => {
          return (
            <label
              key={itemVal}
              className={classNames("mr-2 cursor-pointer", {
                error: meta.touched && meta.error,
              })}
            >
              <input
                type="radio"
                checked={itemVal === field.value}
                onChange={() => helpers.setValue(itemVal)}
                name={props.name}
              />   {title}
            </label>
          );
        })}
      </div>
      {meta.touched && meta.error && (
        <div className="">{meta.error}</div>
      )}
    </div>
  );
};
