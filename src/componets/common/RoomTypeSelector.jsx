import React, { useEffect, useState } from "react";
import { getRoomTypes } from "../utils/ApiFunctions";


const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
  const [roomTypes, setRoomTypes] = useState([""]);
  const [showNewRoomTypeInput, setShowNewTypesInput] = useState(false);
  const [newRoomType, setNewRoomType] = useState("");

useEffect(() => {
  getRoomTypes().then((data) => {
    const filtered = data.filter(type => type && type.trim() !== "");
    console.log("Filtered room types:", filtered);
    setRoomTypes(filtered);
  });
}, []);

  const handleNewRoomTypeInputChange = (e) => {
    setNewRoomType(e.target.value);
  };

  const handleAddNewRoomType = () => {
    if (newRoomType.trim() !== "") {
      setRoomTypes([...roomTypes, newRoomType]);
         handleRoomInputChange({
      target: {
        name: "roomType",
        value: newRoomType,
      },
    });
      setNewRoomType("");
      setShowNewTypesInput(false);
    }
  };

  return (
    <>
      { (
        <div className="w-100">
          <select  className="form-select w-100"
            name="roomType"
            id="roomType"
            value={newRoom.roomType}
            onChange={(e) => {
              if (e.target.value === "Add New") {
                setShowNewTypesInput(true);
              } else {
                handleRoomInputChange(e);
              }
            }}>
        
            <option value={""}>Select a room type</option>
            <option value={"Add New"}>Add New</option>
            {roomTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          {showNewRoomTypeInput && (
            <div className="input-group ">
              <input
                className="form-control"
                type="text"
                placeholder="Enter a new room"
                value={newRoomType}
                onChange={handleNewRoomTypeInputChange}
              />
              <button
                className="btn mybtn-hotel"
                type="button"
                onClick={handleAddNewRoomType}
              >
                Add
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RoomTypeSelector;
