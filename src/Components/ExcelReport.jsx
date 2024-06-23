import React, { useState } from "react";
import { ExcelRenderer } from "react-data-export";

const ExcelDownloadForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [salary, setSalary] = useState("");

  const handleDownload = () => {
    const data = [
      {
        name,
        number,
        salary,
      },
    ];

    const multiDataSet = [
      {
        columns: ["Name", "Number", "Salary"],
        data,
      },
    ];

    ExcelRenderer.multiExport(multiDataSet, "employees");
  };

  return (
    <div>
      <h2>Excel Download Form</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Number"
      />
      <input
        type="text"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="Salary"
      />
      <button onClick={handleDownload}>Download Excel</button>
    </div>
  );
};

export default ExcelDownloadForm;
