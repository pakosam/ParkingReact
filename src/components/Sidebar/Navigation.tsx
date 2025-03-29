import { LogoutIcon } from "../../assets/icons/LogoutIcon";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { sidebarItems } from "./sidebarItems/sidebarItems";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  return (
    <>
      <div id="Navigation">
        <div className="entities">
          {sidebarItems.map((item, index) => {
            const { url, name, Icon } = item;
            return (
              <div
                className={`single-entity ${
                  location.pathname === url ? "active" : ""
                }`}
                key={index}
              >
                <div className="navbar-icon">
                  <Icon />
                </div>
                <div className="navbar-text">
                  <span>
                    <Link to={url}>{name}</Link>
                  </span>
                </div>
              </div>
            );
          })}
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
