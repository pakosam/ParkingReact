import { FormEvent, useEffect, useState } from "react";
import "./UpdateParking.css";
import { parkingRepository } from "../../repositories/parkingRepository";
import { IUpdateParking } from "../../api/apiInterface";

export const UpdateParking = () => {
  const [dbParking, setDbParking] = useState<IUpdateParking>();

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [numberOfPlaces, setNumberOfPlaces] = useState(0);
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [pricePerHour, setPricePerHour] = useState(0);

  const extractIdFromPath = () => {
    const parts = window.location.pathname.split("/");
    console.log(parts)
    const idIndex = parts.indexOf("parkings") + 1;
    console.log(idIndex)
    const id = parseInt(parts[idIndex], 10);
    console.log(id)
    return isNaN(id) ? null : id;
  };

  useEffect(() => {
    const fetchParking = async () => {
      const id = extractIdFromPath();
      if (!id) return;
  
      try {
        const data = await parkingRepository.getSingleParking(id);
        setDbParking(data);

        setId(data.id);
        setName(data.name);
        setNumberOfPlaces(data.numberOfPlaces);
        setOpeningTime(data.openingTime);
        setClosingTime(data.closingTime);
        setPricePerHour(data.pricePerHour);
      } catch (err) {
        console.error("Failed to load parking", err);
      }
    };
  
    fetchParking();
  }, []);

  

  const submitBtn = async (event: FormEvent) => {
    event.preventDefault();

    const id = extractIdFromPath();
    if (!id) return;

    const updatedParking: IUpdateParking = {
      id,
      name,
      numberOfPlaces,
      openingTime,
      closingTime,
      pricePerHour,
    };

    try {
      await parkingRepository.updateParking(updatedParking);
    } catch (err) {
      console.error("Failed to update parking", err);
    }

    if (!dbParking) return null
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
