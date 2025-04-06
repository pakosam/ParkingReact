import { SwitchButton } from "../../assets/icons/SwitchButton";
import "./ParkingActions.css";

interface ParkingActionsProps {
  btnText: string;
}

export const ParkingActions = ({ btnText }: ParkingActionsProps) => {
  return (
    <div className="parking-header">
      <h3>Parkings List</h3>
      <div className="switch-and-btn">
        <div className="switch-icon">
          <SwitchButton />
        </div>
        <button className="add-btn">{btnText}</button>
      </div>
    </div>
  );
};
