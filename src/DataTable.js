// src/DataTable.js

import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table border="1" cellPadding="5" style={{ width: '100%', marginTop: '20px' }}>
      <thead>
        <tr>
          {Object.keys(data[0] || {}).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, idx) => (
              <td key={idx}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
