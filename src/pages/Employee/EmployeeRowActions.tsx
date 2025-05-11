import { Pen } from "../../assets/icons/Pen";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import "./EmployeeRowActions.css";

interface IEmployeeRowActions {
  onDeleteClick: () => void;
}

export const EmployeeRowActions: React.FC<IEmployeeRowActions> = ({ onDeleteClick }) => {
  return (
    <td>
      <div>
        <Pen />
        <DeleteIcon onClick={onDeleteClick} />
      </div>
    </td>
  );
};
