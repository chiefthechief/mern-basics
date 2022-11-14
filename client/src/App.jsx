import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch(err => console.log(err))
  }, [])
  const createUser = () => {
    Axios.post("http:localhost:3001/createUser", {name, age, username})
    .then(response => console.log("user has been created"));
  }
  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return(
            <div>
              <p>name: {user.name}</p>
              <p>age: {user.age}</p>
              <p>username: {user.username}</p>
            </div>
          )
        })}
      </div>
      <div>
        <input type="text" placeholder="name" onChange={(e) => {setName(e.target.value)}}/>
        <input type="number" placeholder="age" onChange={(e) => {setAge(e.target.value)}}/>
        <input type="text" placeholder="username" onChange={(e) => {setUsername(e.target.value)}}/>
        <button onClick={createUser}>create user</button>
      </div>
    </div>
  )
}

export default App
