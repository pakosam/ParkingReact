import "./ParkingView.css";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { ParkingActions } from "./ParkingActions";
import { ParkingRowActions } from "./ParkingRowActions";
import { useEffect, useState } from "react";
import { IParkings } from "../../api/apiInterface";
import { useNavigate } from "react-router-dom";
import { parkingRepository } from "../../repositories/parkingRepository";

export const ParkingView = () => {
  const [parkings, setParkings] = useState<IParkings[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndSetParkings = async () => {
      const data = await parkingRepository.getAllParkings();
      setParkings(data);
    };

    fetchAndSetParkings();
  }, []);

  const addParkingBtn = () => {
    navigate("/parkings/add-parking");
  };

  const updateParking = async (id: number) => {
    navigate(`/parkings/update-parking/${id}`);
  };

  const deleteParking = async (id: number) => {
    await parkingRepository.deleteParking({ id });
    setParkings((prev) => prev?.filter((parking) => parking.id !== id));
  };

  const addEmployeeBtn = (parkingId: number) => {
    const selectedParking = parkings?.find(
      (parking) => parking.id === parkingId
    );

    if (selectedParking) {
      navigate(`${parkingId}/add-employee`);
    }
  };
  if (!parkings) return null;

  return (
    <div id="ParkingView">
      <SearchBar />
      <ParkingActions btnText="ADD NEW PARKING" onAddClick={addParkingBtn} />
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
            <th></th>
          </tr>
          {parkings.map((parking, index) => {
            const {
              image,
              name,
              numberOfPlaces,
              openingTime,
              closingTime,
              pricePerHour,
            } = parking;
            return (
              <tr key={`${index}${name}${numberOfPlaces}`}>
                <td>
                  <div>
                    <img
                      className="parking-image"
                      src={image || "/assets/parkingplace.png"}
                      alt="real-life-parking"
                    />
                  </div>
                </td>
                <td>{name}</td>
                <td>{numberOfPlaces}</td>
                <td>{openingTime}</td>
                <td>{closingTime}</td>
                <td>{pricePerHour}</td>
                <td>
                  <button className="add-employee-btn" onClick={() => addEmployeeBtn(parking.id)}>
                    Add employee
                  </button>
                </td>
                <ParkingRowActions
                  onUpdateClick={() => updateParking(parking.id)}
                  onDeleteClick={() => deleteParking(parking.id)}
                />
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
