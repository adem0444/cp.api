
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import UserList from "./UserList"

function App() {
  const[users,setUsers]= useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>setUsers(result.data))

  })

  

  return (
    <div className="App">
      <header className="App-header">
      {
users.map((user)=>(
  <UserList  user={user}/>
))
      }
      </header>
    </div>
  );
}

export default App;
