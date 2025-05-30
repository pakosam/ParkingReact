import "./SideBar.css";
import { UserProfile } from "./UserProfile";
import { Navigation } from "./Navigation";
import { Outlet } from "react-router-dom";

export const SideBar = () => {
  return (
    <>
      <div id="SideBar" className="md-text">
        <div className="parking-project-div">
          <h3 className="parking-project-text">PARKING PROJECT</h3>
        </div>
        <UserProfile />
        <Navigation />
      </div>

      <Outlet />
    </>
  );
};
