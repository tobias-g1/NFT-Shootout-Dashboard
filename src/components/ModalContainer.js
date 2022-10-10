import { IoMdClose } from "react-icons/io";

const ModalContainer = ({ children, modalStatus, setModalStatus }) => {
  return (
    <div
      className={
        "fixed top-0 left-0 w-full h-full flex items-center justify-center transition z-50 " +
        (modalStatus ? "visible opacity-100" : "invisible opacity-0")
      }
    >
      <div
        className="absolute z-min-1 top-0 h-full w-full opacity-30 bg-black"
        onClick={() => setModalStatus(false)}
      />
      <div
        className={
          "bg-fourth border-primary flex flex-col text-white relative p-10 w-96 rounded-2xl modal transition duration-700 " +
          (modalStatus ? "scale-100" : "scale-0")
        }
      >
        <div className="absolute top-6 right-6 cursor-pointer">
          <IoMdClose size="24" onClick={() => setModalStatus(false)} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
