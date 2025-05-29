import React from "react";
import "./App.css";
import { SideBar } from "./components/Sidebar/SideBar";
import { ParkingView } from "./pages/Parking/ParkingView";
import { Register } from "./pages/Register/Register";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { SignIn } from "./pages/SignIn/SignIn";
import { ParkingsLayout } from "./pages/Parking/ParkingsLayout";
import { EmployeesLayout } from "./pages/Employee/EmployeesLayout";
import { EmployeeView } from "./pages/Employee/EmployeeView";
import { AddEmployee } from "./pages/Employee/AddEmployee";
import { AddParking } from "./pages/Parking/AddParking";
import { UpdateParking } from "./pages/Parking/UpdateParking";
import { UpdateEmployee } from "./pages/Employee/UpdateEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/registration" replace />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/">
          <Route path="/" element={<Navigate to="/signin" replace />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        <Route path="/parkings" element={<ParkingsLayout />}>
          <Route index element={<ParkingView />} />
          <Route
            path="/parkings/:parkingId/add-employee"
            element={<AddEmployee />}
          />
          <Route path="/parkings/add-parking" element={<AddParking />} />
          <Route
            path="/parkings/:parkingId/update-parking"
            element={<UpdateParking />}
          />
        </Route>

        <Route path="/employees" element={<EmployeesLayout />}>
          <Route index element={<EmployeeView />} />
          <Route
            path="/employees/:employeeId/:parkingIdAsParam/update-employee"
            element={<UpdateEmployee />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
