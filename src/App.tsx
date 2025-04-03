import React from "react";
import "./App.css";
import { SideBar } from "./components/Sidebar/SideBar";
import { ParkingView } from "./pages/Parking/ParkingView";
/*import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";*/
import { EmployeeView } from "./pages/EmployeeView";
import { Register } from "./pages/Register";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { SignIn } from "./pages/SignIn";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
