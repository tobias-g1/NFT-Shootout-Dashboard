import { useEffect } from "react";
import DataTable from "datatables.net-responsive-dt";
import { Button, Container, FormFileUpload, FormInput, FormTextArea, Header, ResponsiveDataTable } from "components";
import { emailUserData } from "config/data";
import { useTabs } from "hooks";
import classNames from "classnames";
import { Form, Formik } from "formik";

const EmailUsersPage = () => {
  const tableStatus = ["Scholars", "Managers"];

  const { currentTab, changeTab } = useTabs(0, tableStatus);

  useEffect(() => {
    let table = new DataTable("#emailUser", {
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
      <Header title="Email Users" />
      <div className="bg-light rounded p-4 grid sm:grid-cols-2 grid-cols-1 gap-10">
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
          <ResponsiveDataTable>
              <thead>
                <tr>
                  {["Scholars", "Email"].map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {emailUserData.map((data, index) => (
                  <tr>
                    <td>{data.scholar}</td>
                    <td>{data.email}</td>
                  </tr>
                ))}
              </tbody>
              </ResponsiveDataTable>
          </div>
        </div>
        <div className="bg-white border rounded p-4">
                 <Formik>
                     {(isSubmitting)=>{
                         return (
                             <Form>
                                 <FormInput name="subject" label="Subject" />
                                 <FormInput name="from" label="From" />
                                 <FormFileUpload name="file" label="Attach a file" />
                                 <FormTextArea name="message" label="Message" />
                                 <Button className="mt-4" type="primary">Send</Button>
                             </Form>
                         )
                     }}
                 </Formik>
            </div>
      </div>
    </Container>
  );
};

export default EmailUsersPage;
