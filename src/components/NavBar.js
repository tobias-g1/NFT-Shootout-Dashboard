import { NavLink } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { FiSettings, FiBell } from "react-icons/fi";
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
import { BiChevronDown } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import {Button} from "components";
import DropDownNavLink from "./DropDownNavLink";
import { useState } from "react";

export const NavBar = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  return (
    <div className="flex justify-between border-b pr-4 w-full">
      <div className="lg:hidden flex">
        <NavLink to="/" className="xxs:flex hidden bg-light h-full justify-center items-center px-6">
          <img width="25" src={IMAGE_SRC.mobileLogo} alt="logo" />
        </NavLink>
        <button
          onClick={() => {
            setSidebarStatus(!sidebarStatus);
          }}
          className="text-xl ml-8"
        >
          <GiHamburgerMenu color="#555b6d" />
        </button>
      </div>
      <div className="hidden lg:block"></div>
      <div className="flex items-center">
        <select className="select py-2 border outline-none border focus:border-info rounded bg-light">
          <option>$ USD</option>
          <option>€ Euro</option>
          <option>£ Pounds</option>
        </select>
        <div className="flex items-center ml-8">
          <button>
            <FiBell size="20" color="#555b6d" />
          </button>
        </div>
        <button className="ml-8">
          <FiSettings size="20" color="#555b6d" />
        </button>
        <div className="relative ml-3">
          <button className="flex items-center py-5 bg-light px-3 text-primary">
            <img
              className="rounded-full bg-gray-600 p-1 h-8"
              src={IMAGE_SRC.avatar}
              alt="avatar"
            />
            <div className="mx-2 xxxs:block hidden">admin</div>
            <BiChevronDown />
          </button>
        </div>
      </div>

      {sidebarStatus && (
        <div className="px-5 py-2 border-r bg-gray-100 top-16 mt-2 fixed h-screen overflow-auto scroll z-10 block lg:hidden">
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
    </div>
  );
};