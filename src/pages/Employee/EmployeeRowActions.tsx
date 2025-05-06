import { Pen } from "../../assets/icons/Pen";
import { Trash } from "../../assets/icons/Trash";
import "./EmployeeRowActions.css";

export const EmployeeRowActions = () => {
  return (
    <td>
      <div>
        <Pen />
        <Trash />
      </div>
    </td>
  );
};
