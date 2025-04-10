import "./ParkingView.css";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { ParkingActions } from "./ParkingActions";
import { ParkingRowActions } from "./ParkingRowActions";
import React, { useEffect, useState } from "react";
import { IParkings } from "../../api/apiInterface";

export const ParkingView = () => {

  const [parkings, setParkings] = useState<IParkings[]>();

  useEffect(() => {
    fetch('https://localhost:7185/api/Parkings', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json()) // Convert the response to JSON
      .then((json) => setParkings(json)) // Set the fetched data into state
      .catch((error) => console.error('Error fetching data:', error)); // Catch any fetch errors
  }, []);

  if(!parkings) return null;

  return (
    <div id="ParkingView">
      <SearchBar />
      <ParkingActions btnText="ADD NEW PARKING"/>
      <div className="parking-table-container">
        <table className="table-container">
          <tr className="header-row">
            <th></th>
            <th>Name</th>
            <th>Number of places</th>
            <th>Opening time</th>
            <th>Closing time</th>
            <th>Price per hour</th>
            <th></th>
          </tr>
          {parkings.map((parking, index) => {
            const {image, name, numberOfPlaces, openingTime, closingTime, pricePerHour} = parking;
            return (
              <tr key={`${index}${name}${numberOfPlaces}`}>
                <td>
                  <div>
                    <img
                      className="parking-image"
                      src={image || "/assets/parkingplace.png"}
                    />
                  </div>
                </td>
                <td>{name}</td>
                <td>{numberOfPlaces}</td>
                <td>{openingTime}</td>
                <td>{closingTime}</td>
                <td>{pricePerHour}</td>
                <ParkingRowActions />
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
