import { useEffect, useRef } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import DataTable from "datatables.net-responsive-dt";

import {Button,Container, Header} from "components";
import { stadiumData } from "../../config/data";


const StadiumPage = () => {
    const individualSelect = useRef(null);
    const navigate = useNavigate()
    useEffect(() => {
    let table = new DataTable("#stadiumTable", {
      columnDefs: [
        {
          targets: [0, 1, 2, 3, 4, 5, 6],
          orderable: false,
        },
      ],
      responsive: true,
      searching: false,
      paging: true,
      lengthChange: true,
    });
    return () => {
      table.destroy();
    };
  }, []);




  return (
    <Container>
      <Header title="Stadiums" path={["Dashboard", "Stadiums"]} />
      <Button type="secondary" onClick={()=>navigate("/dashboard/addstadiums")}>Add New Stadium</Button>
      <div className="bg-light p-4 rounded mt-10">
        <div className="flex justify-between flex-wrap">
          <div className="flex items-center flex-wrap">
            <div className="mt-4 flex items-center mr-3">
              <input type="checkbox"  />
              <label className="font-bold text-sm ml-1">Select all</label>
            </div>
            <select className="select py-2 border outline-none border focus:border-info rounded mt-4 mr-3">
              <option>Bulk Actions</option>
              <option>Active</option>
              <option>Deactive</option>
              <option>Edit</option>
              <option>Delete</option>
            </select>
            <Button type="primary" className="mt-4">
              Apply
            </Button>
          </div>
          <div>
            <select className="select py-2 border outline-none border focus:border-info rounded mt-4 mr-3">
              <option>Default Sorting</option>
              <option>Shoo Earned</option>
              <option>Income Daily</option>
            </select>
            <input className="outline-none border focus:border-info px-3 mr-3 mt-4 h-10" />
            <Button type="primary" className="mt-4">
              Search
            </Button>
          </div>
        </div>
       <div className="mt-10"> 
        <table id="stadiumTable" className="nowrap collapsed p-4 mt-10" width="100%">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              {[
                "Stadium ID	",
                "Col ID	",
                "Name",
                "Rename Stadium",
                "Description",
                "Update",
              ].map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stadiumData.map((data, index) => (
              <Formik key={index}>
                <tr>
                  <td className="text-center">
                    <input ref={individualSelect} className="mt-2" type="checkbox" />
                  </td>
                  <td>{data.stadiumId}</td>
                  <td>{data.colId}</td>
                  <td>{data.name}</td>
                  <td>
                    <textarea className="p-2" />
                  </td>
                  <td>
                    <textarea className="p-2" defaultValue={data.description} />
                  </td>
                  <td>
                    <Button type="primary">Update</Button>
                  </td>
                </tr>
              </Formik>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </Container>
  );
};

export default StadiumPage;
