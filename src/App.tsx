import React from "react";
import "./App.css";
import { SideBar } from "./components/Sidebar/SideBar";
import { ParkingView } from "./pages/ParkingView";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { EmployeeView } from "./pages/EmployeeView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route path="/parkings" element={<ParkingView />} />
          <Route path="/employees" element={<EmployeeView />} />
          <Route path="*" element={<Navigate to="/parkings" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
