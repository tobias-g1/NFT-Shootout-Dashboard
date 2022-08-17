import { Formik, Form } from "formik";
import {
  Container,
  FormDateInput,
  Header,
  Button,
} from "components";

const FinancialReportPage = () => {
  return (
    <Container>
      <Header title="Financial Reports" />
      <div className="bg-light rounded p-4">
        <div className="text-center my-5 text-2xl">Select Date</div>
        <Formik
          initialValues={{
            start_date: "2022-05-31",
          }}
        >
          {({values, isSubmitting }) => {
              console.log(values)
            return (
              <Form>
                <div className="bg-white px-2 py-4 rounded border flex justify-center xs:items-end items-center mx-auto gap-5 xs:flex-row flex-col">
                  <FormDateInput name="start_date" label="From" />
                  <FormDateInput name="end_date" label="To" />
                  <Button type="primary">Search</Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
};

export default FinancialReportPage;
