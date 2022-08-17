import { Formik, Form } from "formik";
import { FormInput, FormSelect, FormRadio, Button, Container, Header } from "components";

const AddNewUserPage = () => {
  return (
    <Container>
      <Header title="Add New User" />
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
                  <FormInput label="First Name" name="first_name" isRequired />
                  <FormInput label="Last Name" name="last_name" isRequired />
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
                Add New User
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default AddNewUserPage;
