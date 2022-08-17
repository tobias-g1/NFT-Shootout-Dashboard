import { Button, Container, Header } from "components";
import { settingBackupData } from "config/data";

const BackupDataPage = () => {
  return (
    <Container>
      <Header title="Backup Data" />
      <div className="bg-light p-4 rounded grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-5">
        {settingBackupData.map((data, index) => (
          <div className="bg-white border p-5 flex items-center justify-center flex-col">
            <div className="mb-5">{data.title}</div>
            <Button type="primary">Export to CSV</Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BackupDataPage;
