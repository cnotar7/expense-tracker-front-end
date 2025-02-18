import React, { useState } from 'react';
import axios from 'axios';
import { ExpenseCategory } from './ExpenseCategory.js';
import { saveAs } from 'file-saver';
import { buildGetRequest } from './helper.js';
import * as XLSX from 'xlsx'
import DataTable from './DataTable.js';



const ExpenseTrackerGETApiComponent = () => {
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [getResponse, setGetResponse] = useState('');
  const [data, setData] = useState([]);

  const handleGetExpenses = async (event) => {
    event.preventDefault();
    const baseGetRequestURL = 'http://localhost:8080/expenses';
    const fullGetRequest = buildGetRequest(baseGetRequestURL, userId, paymentMethod, startDate, endDate);
    console.log("Using get request: ", fullGetRequest);
    try {
        const response = await axios.get(fullGetRequest);
        setData(response.data);
        //const worksheet = XLSX.utils.json_to_sheet(response.data);
        //const workbook = XLSX.utils.book_new();
        //XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
        //XLSX.writeFile(workbook, 'data.xlsx');
    } catch (error) {
        console.error(`Error sending GET request to fullGetRequest: `, error);
        setGetResponse(`Error sending POST request to fullGetRequest: `, error);
    }
  };

  return (
    <div>
      <div>
        <h2>Get Expenses for User</h2>
        <h3>*** Use any of the fields to query a custom result ***<br></br>
        If no fields are used, will return all expenses stored</h3>
        <form onSubmit={handleGetExpenses}>
        <div>
          <label>User Id:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
          <label>Payment Method: </label>
          <input type="text" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} />
        </div>
        <div>
          <label>Start Date: </label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div>
          <label>End Date: </label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <button type="submit">Get</button>
        <h3>Response:</h3>
        <pre>{JSON.stringify(getResponse, null, 2)}</pre>
        </form>
        <div style={{ padding: '20px' }}>
          <p>Loading data...</p> : <DataTable data={data} />
        </div>
      </div>

    </div>
  );
};
export default ExpenseTrackerGETApiComponent;
