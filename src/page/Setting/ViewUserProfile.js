import { useState, useRef } from "react";
import classNames from "classnames";
import { BiChevronDown } from "react-icons/bi";

import { Button, Container, Header, ResponsiveDataTable } from "components";
import { useOnClickOutside, useTabs } from "hooks";
import { userProfileData } from "config/data";

const ViewButton = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const actionRef = useRef(null);
  useOnClickOutside(actionRef, () => setDropdownStatus(false));
  return (
    <div className="relative" ref={actionRef}>
      <Button
        onClick={() => {
          setDropdownStatus(!dropdownStatus);
        }}
        type="primary"
        className="flex"
      >
        View
        <BiChevronDown size="24" />
      </Button>
      {dropdownStatus && (
        <div className="absolute top-10 bg-white px-4 py-3 right-0 left-min-10 flex flex-col items-start text-primary rounded shadow-dropdown z-10">
          <button>View</button>
          <button className="mt-2">Delete</button>
        </div>
      )}
    </div>
  );
};

const ViewUserProfilePage = () => {
  const tableStatus = ["Admins", "Scholars", "Managers"];
  const { currentTab, changeTab } = useTabs(0, tableStatus);

  return (
    <Container>
      <Header title="View User Profiles" />
      <div className="rounded bg-light p-4">
        <div className="bg-white border">
          <div className="flex">
            {tableStatus.map((item, index) => (
              <div
                className={classNames("px-4 py-4 cursor-pointer text-lg", {
                  "text-link border-b border-link": currentTab === item,
                })}
                key={index}
                onClick={() => changeTab(index)}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="p-4">
            <ResponsiveDataTable notSortableColumns={[0,3]}>
              <thead>
                <tr>
                  <th></th>
                  {["Scholars", "Email", "Select"].map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {userProfileData.map((data, index) => (
                  <tr key={index}>
                    <td className="text-center">
                      <input className="mt-2" type="checkbox" />
                    </td>
                    <td>{data.scholar}</td>
                    <td>{data.email}</td>
                    <td>
                      <ViewButton />
                    </td>
                  </tr>
                ))}
              </tbody>
            </ResponsiveDataTable>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ViewUserProfilePage;
