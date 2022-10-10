import { Formik, Form } from "formik";
import {
  Container,
  Header,
  Button,
  ResponsiveDataTable,
  FormImageUpload,
  FormSelect,
} from "components";
import { assignManagerData } from "config/data";

const AssingManagersPage = () => {
  return (
    <Container>
      <Header title="Assign Managers" />
      <div className="bg-light p-4 rounded mt-10">
        <div className="flex justify-between flex-wrap items-center">
          <div className="flex items-center flex-wrap">
            <div className="mt-4 flex items-center mr-3">
              <input type="checkbox" />
              <label className="font-bold text-sm ml-1">Select all</label>
            </div>
            <select className="select py-2 border outline-none border focus:border-info rounded mt-4 mr-3">
              <option> Bulk Actions </option> <option> Active </option>
              <option> Deactive </option> <option> Edit </option>
              <option> Delete </option>
            </select>
            <Button type="primary" className="mt-4">
              Apply
            </Button>
          </div>
          <div> 4 Items </div>
        </div>
      </div>
      <div>
        <Formik
          initialValues={{
          data:  assignManagerData
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => {

            return (
              <Form>
              <ResponsiveDataTable notSortableColumns={[0, 1, 2, 3, 4, 5]}>
                <thead>
                  <tr>
                    <th />
                    {["#", "Image", "Name", "Choose Manager", "	Update"].map(
                      (item, index) => (
                        <th key={index}> {item} </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {values.data.map((data, index) => (
                    <tr key={index}>
                      <td className="text-center">
                        <input className="mt-2" type="checkbox" />
                      </td>
                      <td>{data.id}</td>
                      <td>
                        <FormImageUpload name={`data[${index}].image`}/>
                      </td>
                      <td> {data.name} </td>
                      <td>
                        <FormSelect
                          values={[
                            "Steve White",
                            "Mark Jacobs",
                            "Chris Jones",
                            "David Sanders",
                          ]}
                          name={`data[${index}].currentManager`}
                        />
                      </td>
                      <td>
                        <Button type="primary" buttonType="submit">
                          Update
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </ResponsiveDataTable>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
};

export default AssingManagersPage;
