import { LogoutIcon } from "../../assets/icons/LogoutIcon";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { sidebarItems } from "./sidebarItems/sidebarItems";
import { useLocation } from "react-router-dom";
import { JSX } from "react";

export const Navigation = () => {
  const location = useLocation();

  const isItemActive = (url: string) => {
    return location.pathname === url ? "active" : "";
  };

  return (
    <>
      <div id="Navigation">
        <div className="entities">
          {sidebarItems.map((item, index) => {
            const { url, name, Icon } = item;
            return (
              <SidebarEntity
                key={index}
                url={url}
                name={name}
                Icon={Icon}
                isItemActive={isItemActive}
              />
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

interface ISidebarEntity {
  url: string;
  name: string;
  Icon: () => JSX.Element;
  isItemActive: (url: string) => string;
}

const SidebarEntity: React.FC<ISidebarEntity> = ({
  url,
  name,
  Icon,
  isItemActive,
}) => {
  return (
    <div className={`single-entity ${isItemActive(url)}`}>
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
};
