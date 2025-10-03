import React, { useState, useMemo } from "react";

const RoomFilter = ({ data, setFilteredData }) => {
  const [filter, setFilter] = useState("");

  const handleSelectChange = (e) => {
    const selectedRoomType = e.target.value;
    setFilter(selectedRoomType);
    
    if (selectedRoomType === "") {
      // 如果選擇空值，顯示所有房間
      setFilteredData(data);
    } else {
      // 過濾房間
      const filteredRooms = data.filter((room) =>
        room.roomType.toLowerCase().includes(selectedRoomType.toLowerCase())
      );
      setFilteredData(filteredRooms);
    }
  };

  const clearFilter = () => {
    setFilter("");
    setFilteredData(data);
  };

  // 使用 useMemo 來優化效能，避免每次渲染都重新計算
  const roomTypes = useMemo(() => {
    if (!data || data.length === 0) {
      return [""];
    }
    return ["", ...new Set(data.map((room) => room.roomType))];
  }, [data]);

  // 如果沒有數據，顯示載入中或空狀態
  if (!data) {
    return <div>Loading filters...</div>;
  }

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="room-type-filter">
        Filter rooms by type
      </span>
      <select
        className="form-select"
        value={filter}
        onChange={handleSelectChange}
        aria-describedby="room-type-filter"
      >
        <option value="">Select a room type to filter...</option>
        {roomTypes.slice(1).map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button 
        className="btn mybtn-hotel" 
        onClick={clearFilter}
        type="button"
      >
        Clear Filter
      </button>
    </div>
  );
};

export default RoomFilter;