import { useField } from "formik";
import { FaPen } from "react-icons/fa";

export const FormImageUpload = ({ currentSrc, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const handleChange = (ev) => {
    const fileUrl = URL.createObjectURL(ev.target.files[0]);
    helpers.setValue(fileUrl);
  };

  return (
    <div className="flex justify-center items-center">
      <div className='relative'>
      <img className="rounded" width="200" src={field.value} alt="upload" />
      <label for="image-input" className="cursor-pointer absolute top-0 right-0 bg-link rounded-full text-white p-2 translate-y-min-1/2 translate-x-1/2	transform text-xs">
        <FaPen />
      </label>
      </div>
    
      <input
        onChange={(ev) => handleChange(ev)}
        type="file"
        accept=".png, .jpg, .jpeg"
        className="hidden"
        id="image-input"
      />
    </div>
  );
};
