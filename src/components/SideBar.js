import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import {
  AdminIcon,
  DashboardIcon,
  IMAGE_SRC,
  ManagersIcon,
  ProfileIcon,
  ReportIcon,
  ScholarIcon,
  SettingIcon,
  StatiumIcon,
  SupportIcon,
} from "../config/image";
import { Button } from "components";
import DropDownNavLink from "./DropDownNavLink";
import MobileDropDownNavLink from "./MobileDropDownNavLink";

const MobileNavLink = ({ name, path, icon }) => {
  return (
    <NavLink
      to={path}
      className="relative text-primary hover:text-link mobile-link w-full"
    >
      <div className="mx-6 my-8"> {icon}</div>
      <div className="mobile-link-dropdown text-fifth absolute bottom-0 left-full bg-gray-100 w-32 px-4 py-4 transform translate-y-1/2">
        {name}
      </div>
    </NavLink>
  );
};

export const SideBar = () => {
  const [mobileStatus, setMobileStatus] = useState(false);

  return (
    <div className={"hidden lg:block z-10 " + (mobileStatus ? "w-16" : "w-64")}>
      {!mobileStatus && (
        <div className="px-5 py-2 border-r bg-light fixed h-screen overflow-auto scroll z-10">
          <div className="flex justify-between items-center">
            <NavLink to="/">
              <img width="120" src={IMAGE_SRC.logo} alt="logo" />
            </NavLink>

            <button onClick={() => setMobileStatus(true)} className="text-xl">
              <GiHamburgerMenu color="#555b6d" />
            </button>
          </div>
          <div className="text-primary text-sm mt-4">Menu</div>
          <div className="mt-4">
            <NavLink
              to="/dashboard"
              className="flex items-center text-primary hover:text-link mb-4"
            >
              <DashboardIcon />
              <div className="ml-4">Dashbaord</div>
            </NavLink>
            <DropDownNavLink
              name="Profile"
              icon={<ProfileIcon />}
              data={[
                {
                  name: "Account",
                  path: "/dashboard/profile/account",
                },
                {
                  name: "Password",
                  path: "/dashboard/profile/password",
                },
                {
                  name: "Security",
                  path: "/dashboard/profile/security",
                },
                {
                  name: "Application",
                  path: "/dashboard/profile/application",
                },
                {
                  name: "Notification",
                  path: "/dashboard/profile/notification",
                },
              ]}
            />
            <NavLink
              to="/dashboard/stadiums"
              className="flex items-center text-primary hover:text-link mb-4"
            >
              <StatiumIcon />
              <div className="ml-4">Stadiums</div>
            </NavLink>
            <NavLink
              to="/dashboard/managers"
              className="flex items-center text-primary hover:text-link mb-4"
            >
              <ManagersIcon />
              <div className="ml-4">Managers</div>
            </NavLink>
            <NavLink
              to="/dashboard/scholars"
              className="flex items-center text-primary hover:text-link mb-4"
            >
              <ScholarIcon />
              <div className="ml-4">Scholars</div>
            </NavLink>
            <NavLink
              to="/dashboard/reports"
              className="flex items-center text-primary hover:text-link mb-4"
            >
              <ReportIcon />
              <div className="ml-4">Reports</div>
            </NavLink>
            <div className="text-primary text-sm my-4">Others</div>
            <DropDownNavLink
              name="Settings"
              icon={<SettingIcon />}
              data={[
                {
                  name: "Add New User",
                  path: "/dashboard/setting/addNewUser",
                },
                {
                  name: "Assign Managers",
                  path: "/dashboard/setting/assignManagers",
                },
                {
                  name: "View User Profile",
                  path: "/dashboard/setting/viewUserProfile",
                },
                {
                  name: "Email Users",
                  path: "/dashboard/setting/emailUsers",
                },
                {
                  name: "Backup Data",
                  path: "/dashboard/setting/backupData",
                },
                {
                  name: "Financial Reports",
                  path: "/dashboard/setting/financialReport",
                },
                {
                  name: "Add/Remove NFT's",
                  path: "/dashboard/setting/addRemoveNFT",
                },
                {
                  name: "Assign NFT's",
                  path: "/dashboard/setting/assignNFT",
                },
              ]}
            />
            <NavLink
              to="/dashboard/support"
              className="flex items-center text-primary hover:text-link mb-4"
            >
              <SupportIcon />
              <div className="ml-4">Support</div>
            </NavLink>
            <NavLink
              to="/dashboard/scoutAdmin"
              className="flex items-center text-primary hover:text-link mb-4"
            >
              <AdminIcon />
              <div className="ml-4">Scout Admin</div>
            </NavLink>
          </div>
          <div className="flex flex-col justify-center items-center bg-sidebarAlert rounded py-4 px-4 mb-4">
            <img width="100" src={IMAGE_SRC.card} alt="card" />
            <div>Buy More Cards</div>
            <div className="text-center mb-4 mt-2">
              Buy NFT player cards & <br /> stadiums
            </div>
            <Button>Buy Now</Button>
          </div>
        </div>
      )}
      {mobileStatus && (
        <div className="bg-light h-full w-16 py-4 fixed h-screen flex flex-col items-center">
          <NavLink to="/">
            <img
              width="25"
              src={IMAGE_SRC.mobileLogo}
              alt="mobile-logo"
              className="mx-auto"
            />
          </NavLink>
          <button
            onClick={() => setMobileStatus(false)}
            className="text-xl mt-4"
          >
            <GiHamburgerMenu color="#555b6d" />
          </button>
          <div className="">
            <MobileNavLink
              icon={<DashboardIcon />}
              name="Dashboard"
              path="/dashboard"
            />
            <MobileDropDownNavLink
              name="Profile"
              icon={<ProfileIcon />}
              data={[
                {
                  name: "Account",
                  path: "/dashboard/profile/account",
                },
                {
                  name: "Password",
                  path: "/dashboard/profile/password",
                },
                {
                  name: "Security",
                  path: "/dashboard/profile/security",
                },
                {
                  name: "Application",
                  path: "/dashboard/profile/application",
                },
                {
                  name: "Notification",
                  path: "/dashboard/profile/notification",
                },
              ]}
            />
            <MobileNavLink
              icon={<StatiumIcon />}
              name="Stadium"
              path="/dashboard/stadiums"
            />
            <MobileNavLink
              icon={<ManagersIcon />}
              name="Managers"
              path="/dashboard/managers"
            />
            <MobileNavLink
              icon={<ScholarIcon />}
              name="Scholars"
              path="/dashboard/scholars"
            />
            <MobileNavLink
              icon={<ReportIcon />}
              name="Reports"
              path="/dashboard/reports"
            />
            <MobileDropDownNavLink
              name="Settings"
              icon={<SettingIcon />}
              data={[
                {
                  name: "Add New User",
                  path: "/dashboard/setting/addNewUser",
                },
                {
                  name: "Assign Managers",
                  path: "/dashboard/setting/assignManagers",
                },
                {
                  name: "View User Profile",
                  path: "/dashboard/setting/viewUserProfile",
                },
                {
                  name: "Email Users",
                  path: "/dashboard/setting/emailUsers",
                },
                {
                  name: "Backup Data",
                  path: "/dashboard/setting/backupData",
                },
                {
                  name: "Financial Reports",
                  path: "/dashboard/setting/financialReport",
                },
                {
                  name: "Add/Remove NFT's",
                  path: "/dashboard/setting/addRemoveNFT",
                },
                {
                  name: "Assign NFT's",
                  path: "/dashboard/setting/assignNFT",
                },
              ]}
            />
            <MobileNavLink
              icon={<SupportIcon />}
              name="Support"
              path="/dashboard/support"
            />
            <MobileNavLink
              icon={<AdminIcon />}
              name="Scout Admin"
              path="/dashboard/scoutAdmin"
            />
          </div>
        </div>
      )}
    </div>
  );
};
