import { Pen } from "../../assets/icons/Pen";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import "./ParkingRowActions.css";

interface IParkingRowActions {
  onDeleteClick: () => void;
}

export const ParkingRowActions: React.FC<IParkingRowActions> = ({ onDeleteClick }) => {
  return (
    <td>
      <div>
        <Pen />
        <DeleteIcon onClick={onDeleteClick} />
      </div>
    </td>
  );
};
