import { CarIcon } from "../../assets/icons/CarIcon";
import { LogoutIcon } from "../../assets/icons/LogoutIcon";
import { PersonIcon } from "../../assets/icons/PersonIcon";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <div id="NavBar">
        <div className="entities">
          <div className="single-entity">
            <div className="employee-icon">
              <PersonIcon />
            </div>
            <div className="employee-text">
              <span className="smaller-sidebar-fonts">Employees</span>
            </div>
          </div>
          <div className="single-entity">
            <div className="parking-icon">
              <CarIcon />
            </div>
            <div className="parking-text">
              <span className="smaller-sidebar-fonts parking-text">
                Parkings
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="logout-navbar">
        <div className="smaller-sidebar-fonts">
          <span className="smaller-sidebar-fonts">Logout</span>
        </div>
        <div className="logout-icon">
          <LogoutIcon />
        </div>
      </div>
    </>
  );
};
