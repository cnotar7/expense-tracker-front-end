import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import ExpenseTrackerPOSTApiComponent from './ExpenseTrackerPOSTApiComponent';
import ExpenseTrackerGETApiComponent from './ExpenseTrackerGETApiComponent';
import ExpenseTrackerDELETEApiComponent from './ExpenseTrackerDELETEApiComponent';

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelectComponent = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>
        Testing Expense Tracker API
      </h1>
      <div style={{ padding: '20px' }}>
        <nav>
          <button onClick={() => handleSelectComponent('AddExpenses')}>Add Expenses</button>
          <button onClick={() => handleSelectComponent('GetExpenseReport')}>Get Expense Report</button>
          <button onClick={() => handleSelectComponent('DeleteExpense')}>Delete Expense</button>
        </nav>
        <div>
          {selectedComponent === 'AddExpenses' && <ExpenseTrackerPOSTApiComponent />}
          {selectedComponent === 'GetExpenseReport' && <ExpenseTrackerGETApiComponent />}
          {selectedComponent === 'DeleteExpense' && <ExpenseTrackerDELETEApiComponent />}
        </div>
      </div>
    </div>
  );
}

export default App;
