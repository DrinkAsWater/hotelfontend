import React from "react";

// 修正 props 名稱以匹配 ExistingRoom 組件的調用
const RoomPaginator = ({ currentPage, totalPages, onPageChange }) => {
  // 添加保護性檢查
  if (!totalPages || totalPages <= 1) {
    return null;
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button 
              className="page-link" 
              onClick={() => onPageChange(number)}
              type="button"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RoomPaginator;