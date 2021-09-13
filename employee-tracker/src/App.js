import './App.css';
import React, { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
      name: "",
      surname: "",
      task: "",
      postion: "",
      time: "",
      date: "",
    });
    const [people, setPeople] = useState([]);

    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      const { name, task, postion, time,surname ,date,food} = formData;
      if (name && task && postion && time &&surname &&date&&food) {
        setPeople([...people, formData]);
      }
    };

  return (
    <div className="container">
      <div className="topnav">
        <a href="data">ADD DATA</a>
        <a href="list">VIEW LIST</a>
        <a href="eidt">EDIT INFO</a>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label>name</label>
          <input
            type="name"
            onChange={handleChange}

          ></input>
          <label>surname</label>
          <input type="surname" onChange={handleChange}></input>
          <label>task</label>
          <select onChange={handleChange}>
            <option defaultValue>SELECT TASK</option>
            <option value="1" onChange={handleChange}>
              HTML
            </option>
            <option value="3">REACT</option>
            <option value="2">CSS</option>
            <option value="4">REDUX</option>
          </select>
          <label>position</label>
          <select onChange={handleChange}>
            <option defaultValue>SELECT POSITION</option>
            <option value="1">Junior back-end</option>
            <option value="2">Junior back-end</option>
            <option value="3">Senior front-end</option>
            <option value="4">Senior front-end</option>
          </select>
          <label>salary</label>
          <input type="number" onChange={handleChange}></input>
          <label>time</label>
          <input type="time" onChange={handleChange}></input>
          <label>food</label>

          <input
            placeholder="sandwich"
            type="checkbox"
            value="sandwich"
            onChange={handleChange}
          ></input>
          <label>Sandwich</label>
          <input type="checkbox" value="pizza" onChange={handleChange}></input>
          <label>pizza</label>
          <input type="checkbox" value="pie" onChange={handleChange}></input>
          <label>pie</label>
          <input type="checkbox" value="hotdog" onChange={handleChange}></input>
          <label>hotdog</label>
          <input type="submit" />
        </form>
     
        <table className="list" id="employee-list">
          <thead>
            <tr>
              <th>name</th>
              <th>surname</th>
              <th>taRRsk</th>
              <th>position</th>
              <th>salary</th>
              <th>food</th>
              <th>date & time</th>
            </tr>
           
            
          </thead>
        </table>
        <ul>
          {people.map((person, index) => (
            <li key={index}>
              <p>{person.name}</p>
              <p>{person.surname}</p>
              <p>{person.task}</p>
              <p>{person.position}</p>
              <p>{person.salary}</p>
              <p>{person.food}</p>
              <p>{person.date}</p>
              <p>{person.time}</p>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );      
}

 

export default App;
