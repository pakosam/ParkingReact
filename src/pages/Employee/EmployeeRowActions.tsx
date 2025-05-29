import { UpdateIcon } from "../../assets/icons/UpdateIcon";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import "./EmployeeRowActions.css";

interface IEmployeeRowActions {
  onDeleteClick: () => void;
}

export const EmployeeRowActions: React.FC<IEmployeeRowActions> = ({ onDeleteClick }) => {
  return (
    <td>
      <div>
        <DeleteIcon onClick={onDeleteClick} />
      </div>
    </td>
  );
};
