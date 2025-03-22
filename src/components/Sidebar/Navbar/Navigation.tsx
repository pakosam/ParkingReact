import { CarIcon } from "../../../assets/icons/CarIcon";
import { LogoutIcon } from "../../../assets/icons/LogoutIcon";
import { PersonIcon } from "../../../assets/icons/PersonIcon";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <>
      <div id="Navigation">
        <div className="entities">
          <div className="single-entity">
            <div className="navbar-icon">
              <PersonIcon />
            </div>
            <div className="navbar-text">
              <span>Employees</span>
            </div>
          </div>
          <div className="single-entity">
            <div className="navbar-icon">
              <CarIcon />
            </div>
            <div className="navbar-text">
              <span>
                Parkings
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="logout-navbar">
        <div className="logout-text">
          <span>Logout</span>
        </div>
        <div className="navbar-icon">
          <LogoutIcon />
        </div>
      </div>
    </>
  );
};
