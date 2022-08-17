import { Formik, Form } from "formik";
import { Button, Header, Container, FormFileUpload, FormInput, FormTextArea } from "components";

const AddStadiumPage = () => {
  return (
    <Container>
      <Header title="Add Stadium" path={["Dashboard", "Add Stadium"]} />
      <div className="bg-light p-4 rounded">
        <Formik>
          {({ isSubmitting }) => {
            return (
              <Form>
                <div className="bg-white p-4 rounded">
                  <FormInput
                    name="stadium_name"
                    isRequired
                    label="Stadium Name"
                  />
                  <FormTextArea
                    name="stadium_description"
                    label="Description"
                  />
                  <FormFileUpload name="image" label="Image" />
                  <Button type="primary" className="mt-4">
                    Create
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
};

export default AddStadiumPage;
