import { useEffect, useRef, useState } from "react";
import DataTable from "datatables.net-responsive-dt";
import { AiOutlineCheck } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { Formik, Form } from "formik";
import classNames from "classnames";
import { FormInput , FormSelect, Button, FormRadio, Container, Header} from "components";
import { managerData } from "../../config/data";
import { useOnClickOutside } from "../../hooks";

const ApproveButton = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const actionRef = useRef(null);
  useOnClickOutside(actionRef, () => setDropdownStatus(false));
  return (
    <div className="relative" ref={actionRef}>
      <button
        onClick={() => {
          setDropdownStatus(!dropdownStatus);
        }}
        className="bg-softSuccess text-success flex items-center px-4 py-2 rounded"
      >
        Approve
        <BiChevronDown size="24" />
      </button>
      {dropdownStatus && (
        <div className="absolute top-10 bg-white px-4 py-3 right-0 left-min-10 flex flex-col items-start text-primary rounded shadow-dropdown z-10">
          <button>Approve</button>
          <button className="mt-2">Delete</button>
        </div>
      )}
    </div>
  );
};

const ManagerPage = () => {
  const [addNewScholarDropdown, setAddNewScholarDropdown] = useState(false);
  const tableStatus = {
    new:"new",
    current:"current",
    removed:"removed"
  }
  const [currentTableStatus, setCurrentTableStatus] =useState(tableStatus.new)

  useEffect(() => {
    let table = new DataTable("#example", {
      columnDefs: [
        {
          targets: [0, 7],
          orderable: false,
          orderData: [0, 7],
        },
      ],
      responsive: true,
      searching: false,
      lengthChange: false,
      dom: "rtip",
      paging: true,
    });
    return () => {
      table.destroy();
    };
  }, []);

  return (
    <Container>
      <Header title="Scholar Manager" path={["Dashboard", "Scholar Manager"]} />
      <div className="flex justify-between items-start mb-10 flex-wrap">
        <div className="text-success bg-softSuccess px-4 py-3 rounded mt-4">
          This is your unique URL to give to scholars to sign up to your scholar
          program
          <br />{" "}
          <a
            className="text-blue-900"
            target="_blank"
            rel="noreferrer"
            href="https://nftshootout.com/scholarsignup/376727"
          >
            https://nftshootout.com/scholarsignup/376727
          </a>{" "}
          <br />
          All new scholar applicants will be displayed in the tab below
        </div>
        <Button type="secondary" className="mt-4">Buy More Cards</Button>
      </div>
      <div className="bg-light p-4">
        <div className="bg-white">
          <div className="flex justify-between flex-wrap items-center px-2">
            <div className="flex px-1 mt-4">
              <button onClick={()=>setCurrentTableStatus(tableStatus.new)} className={classNames("px-3 py-3", {"text-link border-b border-link":currentTableStatus===tableStatus.new})}>New Scholars</button>
              <button onClick={()=>setCurrentTableStatus(tableStatus.current)} className={classNames("px-3 py-3", {"text-link border-b border-link":currentTableStatus===tableStatus.current})}>Current Scholars</button>
              <button onClick={()=>setCurrentTableStatus(tableStatus.removed)} className={classNames("px-3 py-3", {"text-link border-b border-link":currentTableStatus===tableStatus.removed})}>Removed Scholars</button>
            </div>
            <div className="flex flex-wrap ">
            <select className="select py-2 border outline-none border focus:border-info rounded mt-4 h-10">
              <option>Name</option>
              <option>Shoo Earned</option>
              <option>Income Daily</option>
            </select>
            <input
              placeholder={"Filter by Name"}
              className="outline-none border focus:border-info px-3 mr-3 mt-4 h-10"
            />
          </div>
          <div className="flex">
            <Button className="mt-4">Import CSV</Button>
            <button className="ml-5 mt-4">Export to CSV</button>
          </div>
          </div>
          <div className="p-4">
            <table id="example" className="nowrap collapsed p-4" width="100%">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  {[
                    "Scholars",
                    "Owner %",
                    "Scholar %",
                    "Manager %",
                    "Owns Phone/PC/Internet",
                    "App Data",
                    "Select",
                  ].map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {managerData.map((data, index) => (
                  <Formik key={index}>
                    <tr>
                      <td className="text-center">
                        <input className="mt-2" type="checkbox" />
                      </td>
                      <td>{data.scholars}</td>
                      <td>
                        <FormSelect
                          name={`owner${index}`}
                          values={[
                            "10%",
                            "20%",
                            "30%",
                            "40%",
                            "50%",
                            "60%",
                            "70%",
                            "80%",
                            "90%",
                            "100%",
                          ]}
                          defaultValue={data.owner}
                        />
                      </td>
                      <td>
                        <FormSelect
                          name={`owner${index}`}
                          values={["45%", "60%", "70%", "80%", "90%", "100%"]}
                          defaultValue={data.scholar}
                        />
                      </td>
                      <td>
                        <FormSelect
                          name={`owner${index}`}
                          values={[
                            "5%",
                            "10%",
                            "20%",
                            "30%",
                            "40%",
                            "50%",
                            "100%",
                          ]}
                          defaultValue={data.manager}
                        />
                      </td>
                      <td>
                        {data.ownPhone ? (
                          <AiOutlineCheck color="#008000" size="24" />
                        ) : (
                          ""
                        )}
                      </td>
                      <td className="min-w-40">{data.appData}</td>
                      <td>
                        <ApproveButton />
                      </td>
                    </tr>
                  </Formik>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Button
          onClick={() => setAddNewScholarDropdown(!addNewScholarDropdown)}
          type="secondary"
          className="mt-10"
        >
          Add New Scholar +
        </Button>
        {addNewScholarDropdown && (
          <Formik
            initialValues={{ own_pc: "yes" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ isSubmitting }) => {
              return (
                <Form>
                  <div className="border bg-white p-4 max-w-3xl mt-10">
                    <div className="grid grid-cols-2 gap-5">
                      <FormInput
                        label="First Name"
                        name="first_name"
                        isRequired
                      />
                      <FormInput
                        label="Last Name"
                        name="last_name"
                        isRequired
                      />
                    </div>
                    <FormInput label="Email" name="email" isRequired />
                    <FormInput label="Phone Number" name="phone_number" />
                    <FormInput label="BSC Address" name="bsc_address" />
                    <div className="font-bold mt-4">Percentage Spilt</div>
                    <div className="grid grid-cols-3 gap-5 mt-2">
                      <FormSelect
                        label="Owner"
                        name="percent_spilt_owner"
                        values={["50%", "60%", "70%"]}
                      />
                      <FormSelect
                        label="Scholar"
                        name="percent_spilt_scholar"
                        values={["45%", "60%", "70%"]}
                      />
                      <FormSelect
                        label="Manager"
                        name="percent_spilt_manager"
                        values={["5%", "6%", "70%"]}
                      />
                    </div>
                    <FormRadio
                      label="Own PC/Phone/Internet"
                      name="own_pc"
                      values={[
                        {
                          title: "Yes",
                          id: "yes",
                        },
                        {
                          title: "No",
                          id: "no",
                        },
                      ]}
                    />
                    <Button buttonType="submit" className="mt-4">
                      Add New Scholar
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        )}
      </div>
    </Container>
  );
};

export default ManagerPage;
