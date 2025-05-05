import React from "react";
import "./App.css";
import { SideBar } from "./components/Sidebar/SideBar";
import { ParkingView } from "./pages/Parking/ParkingView";
import { Register } from "./pages/Register";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { ParkingsLayout } from "./pages/Parking/ParkingsLayout";
import { EmployeesLayout } from "./pages/Employee/EmployeesLayout";
import { EmployeeView } from "./pages/Employee/EmployeeView";

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
        </Route>

        <Route path="/employees" element={<EmployeesLayout />}>
          <Route index element={<EmployeeView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
