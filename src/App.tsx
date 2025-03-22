import React from "react";
import "./App.css";
import { SideBar } from "./components/Sidebar/SideBar";
import { ParkingView } from "./components/Container/ParkingView";

function App() {
  return (
    <div className="page">
      <SideBar />
      <ParkingView />
    </div>
  );
}

export default App;
