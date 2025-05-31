import { UpdateIcon } from "../../assets/icons/UpdateIcon";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import "./EmployeeRowActions.css";

interface IEmployeeRowActions {
  onUpdateClick: () => void;
  onDeleteClick: () => void;
}

export const EmployeeRowActions: React.FC<IEmployeeRowActions> = ({ onUpdateClick, onDeleteClick }) => {
  return (
    <td>
      <div>
        <UpdateIcon onClick={onUpdateClick} />
        <DeleteIcon onClick={onDeleteClick} />
      </div>
    </td>
  );
};
