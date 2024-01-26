/** @format */

import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";

const PaginationComponent = ({ apiUrl, itemsPerPage }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}?_page=${currentPage}&_limit=${itemsPerPage}`
        );
        const jsonData = response.json();
        setData(jsonData);
        const totalCount = response.headers.get("X-Total-Count");
        setTotalPages(Math.ceil(totalCount / itemsPerPage));
      } catch (error) {
        console.log("Error fetching data:", data);
      }
    };
    fetchData();
  }, [apiUrl, currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <ol>
        {!isEmpty(data) &&
          data.map((item) => <li key={item.id}>{item.title}</li>)}
      </ol>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
