import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./UpdateParking.css";
import { parkingRepository } from "../../repositories/parkingRepository";

export const UpdateParking = () => {
  const location = useLocation();

  const dbParking = location.state as {
    id: number;
    name: string;
    numberOfPlaces: number;
    openingTime: string;
    closingTime: string;
    pricePerHour: number;
  };

  const [id, setId] = useState(dbParking.id);
  const [name, setName] = useState(dbParking.name);
  const [numberOfPlaces, setNumberOfPlaces] = useState(dbParking.numberOfPlaces);
  const [openingTime, setOpeningTime] = useState(dbParking.openingTime);
  const [closingTime, setClosingTime] = useState(dbParking.closingTime);
  const [pricePerHour, setPricePerHour] = useState(dbParking.pricePerHour);

  const submitBtn = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const result = await parkingRepository.updateParking({
        id,
        name,
        numberOfPlaces,
        openingTime,
        closingTime,
        pricePerHour,
      });

      dbParking.id = result.id;
      dbParking.name = result.name;
      dbParking.numberOfPlaces = result.numberOfPlaces;
      dbParking.openingTime = result.openingTime;
      dbParking.closingTime = result.closingTime;
      dbParking.pricePerHour = result.pricePerHour;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="update-parking">
      <div className="main-content">
        <div className="update-parking-sentence">
          <h4>UPDATE PARKING</h4>
        </div>
        <div className="form-container">
          <form className="form" onSubmit={submitBtn}>
            <label className="label" htmlFor="id">
              ID
            </label>
            <input
              type="number"
              name="id"
              className="input"
              value={id}
              readOnly
            />
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter parking name"
              name="name"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="label" htmlFor="numberOfPlaces">
              Number of Places
            </label>
            <input
              type="number"
              name="numberOfPlaces"
              className="input"
              value={numberOfPlaces}
              onChange={(e) => setNumberOfPlaces(Number(e.target.value))}
              required
            />

            <label className="label" htmlFor="openingTime">
              Opening Time
            </label>
            <input
              type="time"
              name="openingTime"
              className="input"
              value={openingTime}
              onChange={(e) => setOpeningTime(e.target.value)}
              required
            />

            <label className="label" htmlFor="closingTime">
              Closing Time
            </label>
            <input
              type="time"
              name="closingTime"
              className="input"
              value={closingTime}
              onChange={(e) => setClosingTime(e.target.value)}
              required
            />

            <label className="label" htmlFor="pricePerHour">
              Price per hour
            </label>
            <input
              type="number"
              name="pricePerHour"
              className="input"
              value={pricePerHour}
              onChange={(e) => setPricePerHour(Number(e.target.value))}
              required
            />

            <button type="submit" className="register-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
