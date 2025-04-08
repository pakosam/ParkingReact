import { BackArrow } from "../../assets/icons/BackArrow";
import { RingBell } from "../../assets/icons/RingBell";
import "./SearchBar.css";


export const SearchBar = () => {
  return (
    <div className="search-bar-content">
      <div className="back-arrow">
        <BackArrow />
      </div>
      <div className="search-and-notification">
        <input type="text" placeholder="Search..." name="search" className="search-input" />
        <div className="ring-icon">
          <RingBell />
        </div>
      </div>
    </div>
  );
};
