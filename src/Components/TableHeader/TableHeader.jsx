import React from "react";
import "./index.css";

const TableHeader = () => {
  return (
    <div className="table_header_container">
      <div className="table_header_inner_container">
        <p className="table_header_row">Country</p>
        <p className="table_header_row">Cases</p>
        <p className="table_header_row">Deaths</p>
        <p className="table_header_row">Recovered</p>
      </div>
    </div>
  );
};

export default TableHeader;
