import { UpdateIcon } from "../../assets/icons/UpdateIcon";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import "./ParkingRowActions.css";

interface IParkingRowActions {
  onUpdateClick: () => void;
  onDeleteClick: () => void;
}

export const ParkingRowActions: React.FC<IParkingRowActions> = ({ onUpdateClick, onDeleteClick }) => {
  return (
    <td>
      <div>
        <UpdateIcon onClick = {onUpdateClick}/>
        <DeleteIcon onClick={onDeleteClick} />
      </div>
    </td>
  );
};
