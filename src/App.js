import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';


import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
          <Routes>
       
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/login' element={<Login/>}/>
              <Route path='/' element={<GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>}></Route>
          </Routes>
      </BrowserRouter>
 
  );
}

export default App;
 