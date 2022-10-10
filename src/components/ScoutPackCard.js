import { CgTrashEmpty } from "react-icons/cg";
import {Button} from "components";

export const ScoutPackCard = ({ data }) => {
  const { imgSrc } = data;
  return (
    <div className="mx-3 cursor-pointer">
      <img className="rounded-2xl" src={imgSrc} alt="scout" />
      <div className="w-full grid grid-cols-2 bg-white mt-4 p-2 rounded ">
        <Button>Sell</Button>
        <button className="text-danger flex items-center justify-center">
          <CgTrashEmpty />
          <div>Delete</div>
        </button>
      </div>
    </div>
  );
};