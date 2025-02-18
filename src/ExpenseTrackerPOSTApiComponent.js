import React, { useState } from 'react';
import axios from 'axios';
import { ExpenseCategory } from './ExpenseCategory.js';
import { saveAs } from 'file-saver';
import { buildGetRequest } from './helper.js';

const ExpenseTrackerPOSTApiComponent = () => {
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [postResponse, setPostResponse] = useState('');
  const [getResponse, setGetResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = {
        userId: userId,
        amount: amount,
        description: description,
        date: date,
        paymentMethod: paymentMethod,
        expenseCategory: expenseCategory
    };

    try {
        const response = await axios.post('http://localhost:8080/expenses', postData);
        setPostResponse(response.data);
    } catch (error) {
        console.error('Error sending POST request to http://localhost:8080/expenses: ', error);
        setPostResponse('Error sending POST request to http://localhost:8080/expenses: ', error);
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>User Id:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
      </div>
      <div>
          <label>Date:</label>
          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
          <label>Amount:</label>
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </div>
      <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
          <label>Payment Method:</label>
          <input type="text" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required />
      </div>
      <div>
          <label>Expense Category:
          <select name="expenseCategory" value={expenseCategory} onChange={(e) => setExpenseCategory(e.target.value)}>
            <option value="">Select an option</option>
            {ExpenseCategory.map((type, index) => (
                <option key={index} value={type}>
                {type}
                </option>
            ))}
          </select>
          </label>
      </div>
      <button type="submit">Submit</button>
      </form>
      <h3>Response:</h3>
      <pre>{JSON.stringify(postResponse, null, 2)}</pre>
    </div>
  );
};

export default ExpenseTrackerPOSTApiComponent;
