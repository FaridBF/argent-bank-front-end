import React, { useState } from 'react';

import '../ArrayTransactions/arrayTransactions.css';

export default function ArrayTransactions() {
  const [rows, setRows] = useState([
    {
      id: 1,
      col1: '20 juin 2020',
      col2: 'Golden Sun Bakery',
      col3: '5$',
      col4: '2000$',
      isCollapsed: true
    },
    {
      id: 2,
      col1: '20 juin 2020',
      col2: 'Golden Sun Bakery',
      col3: '5$',
      col4: '2000$',
      isCollapsed: true
    },
    {
      id: 3,
      col1: '20 juin 2020',
      col2: 'Golden Sun Bakery',
      col3: '5$',
      col4: '2000$',
      isCollapsed: true
    }
  ]);

  const toggleRow = (id) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, isCollapsed: !row.isCollapsed } : row
    );
    setRows(updatedRows);
  };

  return (
    <table className='container-table'>
      <thead>
        <tr>
          <th>DATE</th>
          <th>DESCRIPTION</th>
          <th>AMOUNT</th>
          <th>BALANCE</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <React.Fragment key={row.id}>
            <tr onClick={() => toggleRow(row.id)}>
              <td className='transactionLine'>{row.col1}</td>
              <td className='transactionLine'>{row.col2}</td>
              <td className='transactionLine'>{row.col3}</td>
              <td className='transactionLine'>{row.col4}</td>
            </tr>
            {!row.isCollapsed && (
              <tr className='container-collapse'>
                <td colSpan='4'>Transaction Type : Electronic {row.id}</td>
                <td colSpan='4'>Category : Food {row.id}</td>
                <td colSpan='4'>Notes {row.id}</td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
