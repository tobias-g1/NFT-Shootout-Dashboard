import { NavBar, Footer, SideBar } from "components";
import AddStadiumPage from "page/AddStadium";
import AdminPage from "page/Admin";
import DashboardPage from "page/Dashboard";
import ManagerPage from "page/Manager";
import ReportPage from "page/Report";
import ScholarsPage from "page/Scholars";
import AddNewUserPage from "page/Setting/AddNewUser";
import AddRemoveNFTPage from "page/Setting/AddRemoveNFT";
import AssingManagersPage from "page/Setting/AssingManagers";
import BackupDataPage from "page/Setting/BackupData";
import EmailUsersPage from "page/Setting/EmailUsers";
import FinancialReportPage from "page/Setting/FinancialReport";
import ViewUserProfilePage from "page/Setting/ViewUserProfile";
import StadiumPage from "page/Stadium";
import SupportPage from "page/Support";
import { Route, Routes } from "react-router-dom";

const DashboardRouter = () => {
  return (
    <div className="flex bg-white">
      <SideBar />
      <div className="flex-1 overflow-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="scholars" element={<ScholarsPage />} />
          <Route path="scoutAdmin" element={<AdminPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="reports" element={<ReportPage />} />
          <Route path="managers" element={<ManagerPage />} />
          <Route path="stadiums" element={<StadiumPage />} />
          <Route path="addstadiums" element={<AddStadiumPage />} />
          <Route path="setting/addNewUser" element={<AddNewUserPage />} />
          <Route path="setting/backupData" element={<BackupDataPage />} />
          <Route
            path="setting/financialReport"
            element={<FinancialReportPage />}
          />
          <Route path="setting/addRemoveNFT" element={<AddRemoveNFTPage />} />
          <Route
            path="setting/viewUserProfile"
            element={<ViewUserProfilePage />}
          />
          <Route path="setting/emailusers" element={<EmailUsersPage />} />
          <Route
            path="setting/assignManagers"
            element={<AssingManagersPage />}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardRouter;
