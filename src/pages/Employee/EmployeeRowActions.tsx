import { Pen } from "../../assets/icons/Pen";
import { Trash } from "../../assets/icons/Trash";
import "./EmployeeRowActions.css";

interface Props {
  id: number;
  onDeleteClick: (id: number) => void;
}

export const EmployeeRowActions: React.FC<Props> = ({ id, onDeleteClick }) => {
  return (
    <td>
      <div>
        <Pen />
        <Trash onClick={() => onDeleteClick(id)} />
      </div>
    </td>
  );
};
