import { useRef, useState } from "react";
import { AiOutlineCheck, AiFillMinusCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { HiOutlineArrowDown, HiOutlineArrowUp } from "react-icons/hi";
import Pagination from "./Pagination";

import { useOnClickOutside, useSortableData } from "../hooks";
import {Button} from "components";

const DeleteButton = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const actionRef = useRef(null)
  useOnClickOutside(actionRef, ()=>{setDropdownStatus(false)})

  return (
    <div className="relative" ref={actionRef}>
      <button
        onClick={() => {
          setDropdownStatus(!dropdownStatus);
        }}
        className="bg-softDanger text-danger flex items-center px-4 py-2 rounded"
      >
        Delete
        <BiChevronDown size="24" />
      </button>
      {dropdownStatus && (
        <div className="absolute top-10 bg-white px-4 py-3 right-0 left-min-10 flex flex-col items-start text-primary rounded shadow-dropdown z-10">
          <button>Temporay</button>
          <button className="mt-2">Permanently</button>
        </div>
      )}
    </div>
  );
};

const ResponsiveTR = ({ item, checked, toggleChecked }) => {
  const [collapeStatus, setCollapseStatus] = useState(false);

  return (
    <tr className="flex flex-wrap">
      <td className="w-12 border flex justify-center items-center">
        <div
          className="block 2xl:hidden mr-1"
          onClick={() => setCollapseStatus(!collapeStatus)}
        >
          {collapeStatus ? (
            <AiFillMinusCircle color="red" />
          ) : (
            <BsFillPlusCircleFill color="#5156be" />
          )}
        </div>
        <input
          onChange={() => toggleChecked(item.id)}
          type="checkbox"
          className="cursor-pointer w-4 h-4"
          checked={checked}
        />
      </td>
      <td className="min-w-36 flex-1 border py-6 px-2">{item.scholars}</td>
      <td className="min-w-36 flex-1 border py-6 px-2 hidden xxxs:block">
        {item.schooEarned}
      </td>
      <td className="w-24 border py-6 px-2 hidden xxs:block">{`#${item.id}`}</td>
      <td className="min-w-36 flex-1 border py-6 px-2 hidden xs:block">
        {item.incomeDaily}
      </td>
      <td className="min-w-36 flex-1 border py-6 px-2 hidden sm:block">
        {item.claimableNow ? <AiOutlineCheck color="#008000" size="24" /> : ""}
      </td>
      <td className="min-w-36 flex-1 border py-6 px-2 hidden md:flex lg:hidden xl:flex">
        {item.lastLoggedIn}
      </td>
      <td className="min-w-28 flex-1 border py-6 px-2 hidden 2xl:block">
        <DeleteButton />
      </td>
      {/* mobile */}
      {collapeStatus && (
        <div className="w-full border block 2xl:hidden">
          <div className="w-full border-b py-6 px-2 block xxxs:hidden flex">
            <div className="mr-2 font-bold">Shoo Earned</div>
            <div>{item.schooEarned}</div>
          </div>
          <div className="w-full border-b py-6 px-2 block xxs:hidden flex">
            <div className="mr-2 font-bold">Id</div>
            <div>{`#${item.id}`}</div>
          </div>
          <div className="w-full border-b py-6 px-2 block xs:hidden flex">
            <div className="mr-2 font-bold">Income Daily</div>
            <div>{item.incomeDaily}</div>
          </div>
          <div className="w-full border-b py-6 px-2 block sm:hidden flex">
            <div className="mr-2 font-bold">Claimable Now</div>
            <div>
              {item.claimableNow ? (
                <AiOutlineCheck color="#008000" size="24" />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="w-full border-b py-6 px-2 block flex md:hidden lg:flex xl:hidden">
            <div className="mr-2 font-bold">Last Logged in</div>
            <div>{item.lastLoggedIn}</div>
          </div>
          <div className="w-full py-6 px-2 flex items-center">
            <div className="mr-2 font-bold">Action</div>
            <DeleteButton />
          </div>
        </div>
      )}
    </tr>
  );
};

const TH = ({ requestSort = null, className, children }) => {
  const [sortClickedStatus, setSortClickedStatus] = useState(null);

  return (
    <th
      className={`text-left border py-6 px-2 cursor-pointer flex items-center ${className}`}
      onClick={() => {
        requestSort();
        setSortClickedStatus(!sortClickedStatus);
      }}
    >
      {children}
      {requestSort && (
        <HiOutlineArrowUp
          className={`h-full ml-1 ${!sortClickedStatus && "opacity-70"}`}
        />
      )}
      {requestSort && (
        <HiOutlineArrowDown
          className={`h-full ml-min-1.5 ${
            (sortClickedStatus || sortClickedStatus === null) && "opacity-70"
          }`}
        />
      )}
    </th>
  );
};

export const Table = ({ data }) => {
  const [checkedList, setCheckedList] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const { sortedData, requestSort } = useSortableData(data);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleChecked = (index) => {
    if (checkedList.includes(index)) {
      setAllChecked(false);
      setCheckedList(checkedList.filter((list) => list !== index));
    } else {
      setCheckedList([...checkedList, index]);
      if (checkedList.length === data.length - 1) setAllChecked(true);
    }
  };

  let PageSize = 10;

  const currentPageSortedData = sortedData.slice(
    (currentPage - 1) * PageSize,
    (currentPage - 1) * PageSize + PageSize
  );

  const toggleAllChecked = (ev) => {
    if (ev.target.checked) {
      setAllChecked(true);
      let updatedCheckList = [];
      for (let i = 0; i < data.length; i++) {
        updatedCheckList.push(data[i].id);
      }
      setCheckedList(updatedCheckList);
    } else {
      setAllChecked(false);
      setCheckedList([]);
    }
  };

  return (
    <div>
      <div className="flex justify-between mb-10 flex-wrap">
        <div className="flex flex-wrap">
          <div className="flex flex-wrap">
            <select className="select py-2 border outline-none border focus:border-info rounded mt-4">
              <option>Name</option>
              <option>Shoo Earned</option>
              <option>Income Daily</option>
            </select>
            <input
              placeholder={"Filter by Name"}
              className="outline-none border focus:border-info px-3 mr-3 mt-4"
            />
            <select className="select py-2 mr-3 outline-none border border focus:border-info rounded mt-4">
              <option>Daily</option>
              <option>Shoo Earned</option>
              <option>Income Daily</option>
            </select>
          </div>
          <div className="flex">
            <Button className="mt-4">Import CSV</Button>
            <button className="ml-5 mt-4">Export to CSV</button>
          </div>
        </div>
        <Button className="mt-4" type="secondary" fontSize="big">
          Buy More Cards
        </Button>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={allChecked}
          onChange={(ev) => toggleAllChecked(ev)}
          className="cursor-pointer h-4 w-4 mr-1"
        />
        <div>Select all</div>
      </div>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="flex flex-wrap text-primary">
            <th className="w-12 border" />
            <TH
              requestSort={() => requestSort("scholars")}
              className="min-w-36 flex-1 "
            >
              Scholars
            </TH>
            <TH
              requestSort={() => requestSort("schooEarned")}
              className="min-w-36 hidden xxxs:flex flex-1"
            >
              Shoo Earned
            </TH>
            <TH
              requestSort={() => requestSort("id")}
              className="w-24 hidden xxs:flex"
            >
              Id
            </TH>
            <TH
              requestSort={() => requestSort("incomeDaily")}
              className="min-w-36 flex-1 hidden xs:flex"
            >
              Income Daily
            </TH>
            <TH
              requestSort={() => requestSort("claimableNow")}
              className="min-w-36 flex-1 hidden sm:flex"
            >
              Claimable Now
            </TH>
            <TH
              requestSort={() => requestSort("lastLoggedIn")}
              className="min-w-36 flex-1 hidden md:flex lg:hidden xl:flex"
            >
              Last Logged in
            </TH>
            <TH className="min-w-28 flex-1 hidden 2xl:flex">Action</TH>
          </tr>
        </thead>
        <tbody>
          {currentPageSortedData.map((item, index) => {
            return (
              <ResponsiveTR
                item={item}
                key={index}
                checked={checkedList.includes(item.id)}
                toggleChecked={toggleChecked}
              />
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="w-full mt-5"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};
