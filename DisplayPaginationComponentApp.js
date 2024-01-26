import React from "react";
import PaginationComponent from "./PaginationComponent";

function DisplayPaginationComponentApp() {
  return (
    <div>
      <h1> Pagination Example</h1>
      <PaginationComponent
        apiUrl="https://jsonplaceholder.typicode.com/posts"
        itemsPerPage={10}
      />
    </div>
  );
}

export default DisplayPaginationComponentApp;
