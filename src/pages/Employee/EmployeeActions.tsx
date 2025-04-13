import { SwitchButton } from "../../assets/icons/SwitchButton";
import "./EmployeeActions.css";

interface EmployeeActionsProps {
  btnText: string;
}

export const EmployeeActions = ({ btnText }: EmployeeActionsProps) => {
  return (
    <div className="employee-header">
      <h3>Employees List</h3>
      <div className="switch-and-btn">
        <div className="switch-icon">
          <SwitchButton />
        </div>
        <button className="add-btn">{btnText}</button>
      </div>
    </div>
  );
};