import { Pen } from "../../assets/icons/Pen";
import { Trash } from "../../assets/icons/Trash";
import "./ParkingRowActions.css";

interface Props {
  id: number;
  onDeleteClick: (id: number) => void;
}

export const ParkingRowActions: React.FC<Props> = ({ id, onDeleteClick }) => {
  return (
    <td>
      <div>
        <Pen />
        <Trash onClick={() => onDeleteClick(id)} />
      </div>
    </td>
  );
};
