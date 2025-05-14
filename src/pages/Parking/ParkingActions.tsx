import { SwitchButton } from "../../assets/icons/SwitchButton";
import "./ParkingActions.css";

interface ParkingActionsProps {
  btnText: string;
  onAddClick: () => void;
}

export const ParkingActions: React.FC<ParkingActionsProps> = ({ btnText, onAddClick }) => {
  return (
    <div className="parking-header">
      <h3>Parkings List</h3>
      <div className="switch-and-btn">
        <div className="switch-icon">
          <SwitchButton />
        </div>
        <button className="add-btn" onClick={onAddClick}>{btnText}</button>
      </div>
    </div>
  );
};
