import "./SideBar.css";
import { UserProfile } from "./UserProfile";
import { NavBar } from "./NavBar";

export const SideBar = () => {
  return (
    <div id="SideBar">
      <div className="parking-project-div">
        <h3 className="parking-project-text">PARKING PROJECT</h3>
      </div>
      <UserProfile />
      <NavBar />
    </div>
  );
};
