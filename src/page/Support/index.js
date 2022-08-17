import { FiMessageCircle } from "react-icons/fi";
import {Button, Container, Header} from "components";

const SupportPage = () => {
  return (
    <Container>
      <Header title="Support" path={["Dashboard", "Support"]} />
      <div className="bg-light rounded p-4">
        <div className="flex">
          <FiMessageCircle size="40" />
          <div className="ml-4">
            <div className="text-2xl">Need Some help?</div>
            <div className="mt-3 text-sm">
              Start by sending a message to our customer support
            </div>
          </div>
        </div>
        <div className="bg-white p-5 mt-4 rounded border">
          <div className="font-bold text-sm">Name</div>
          <input className="w-full outline-none border focus:border-info px-3 py-2 my-2 rounded " />
          <div className="font-bold text-sm mt-4">Email</div>
          <input className="w-full outline-none border focus:border-info px-3 py-2 my-2 rounded " />
          <div className="font-bold text-sm mt-4">Attach a file</div>
          <input
            type="file"
            className="file-upload cursor-pointer w-full outline-none border focus:border-info h-10 my-2 rounded "
          />

          <div className="font-bold text-sm mt-4">Message</div>
          <textarea className="w-full outline-none border focus:border-info px-3 py-2 my-2 rounded " />

          <Button>Send</Button>
          <div className="bg-softSuccess text-success rounded px-4 py-5 text-2xl text-center mt-10">
            Thank you for contacting support
            <br />
            Someone will get back to you with 24 to 48 hours
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SupportPage;
