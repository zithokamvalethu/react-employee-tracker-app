import './App.css';
import React from "react";
function App() {
  
 
  return (
    <div className="container">
      
        <div className="topnav" >
          <a href="#Add-data">ADD DATA</a>
          <a href="#employee-list">VIEW LIST</a>
          <a href="#Edit info">EDIT INFO</a>
          
        </div>

        <div className="Add-data">
          <label>name</label>
          <input type="surname"></input>
          <label>surname</label>
          <input type="name"></input>

          <select>
            <option defaultValue>SELECT TASK</option>
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">REACT</option>
            <option value="4">REDUX</option>
          </select>

          <select>
            <option defaultValue>SELECT POSITION</option>
            <option value="1">Senior back-end</option>
            <option value="2">Junior back-end</option>
            <option value="3">Senior front-end</option>
            <option value="4">Senior front-end</option>
          </select>

          <label>salary</label>
          <input type="number"></input>
          <label>time</label>
          <input type="time"></input>
          <label>Food Preferance</label>
          <input type="checkbox" value="meat"></input>
          <input type="checkbox" value="pizza"></input>
          <input type="checkbox" value="pie"></input>
          <input type="checkbox" value="hotdog"></input>
          <input type="date"></input>

          <table class="list" id="employee-list">
            <thead>
              <tr>
                <th>NAME</th>
                <th>SURNAME</th>
                <th>WORKING ON</th>
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
 
  );      
}
  
  
 

export default App;
