import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/User/Cart/Cart';
import User from './Components/User/User';
import data from './fakeData/data.json';

function App() {
  const [user,setUser]= useState([]);
  const [count,setCount] = useState([]);
  useEffect(() =>{
    setUser(data);
  },[])

  const handleAdd = (id) =>{
    const newCount = [...count,id];
    setCount(newCount);
  }
  return (
    <div className="App">
      
      <header className="App-header">
      {
            user.map(person => <User id={person} handleAdd={handleAdd}></User>)
      }
      </header>
      
      <div className="cart-container">
        <Cart count={count}></Cart>

      </div>
    </div>
  );
}

export default App;
