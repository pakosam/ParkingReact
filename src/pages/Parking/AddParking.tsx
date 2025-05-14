import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddParking.css";
import { parkingRepository } from "../../repositories/parkingRepository";

export const AddParking = () => {
  const [name, setName] = useState("");
  const [numberOfPlaces, setNumberOfPlaces] = useState(0);
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [pricePerHour, setPricePerHour] = useState(0);
  const navigate = useNavigate();

  const resetForm = () => {
    setName("");
    setNumberOfPlaces(0);
    setOpeningTime("");
    setClosingTime("");
    setPricePerHour(0);
  };

  const submitBtn = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const result = await parkingRepository.addParking({
        name,
        numberOfPlaces,
        openingTime,
        closingTime,
        pricePerHour,
      });
    } catch (error) {
      console.error("Error:", error);
    }

    resetForm();
  };
  return (
    <div className="add-parking">
      <div className="main-content">
        <div className="add-parking-sentence">
          <h4>ADD PARKING</h4>
        </div>
        <div className="form-container">
          <form className="form" onSubmit={submitBtn}>
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
