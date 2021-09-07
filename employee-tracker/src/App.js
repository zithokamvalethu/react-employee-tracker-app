import './App.css';
import React ,{useState}from "react";
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
    
    <div className="container" onSubmit={handleSubmit}>
      <div className="topnav">
        <a href="#Add-data">ADD DATA</a>
        <a href="#employee-list">VIEW LIST</a>
        <a href="#Edit info">EDIT INFO</a>
      </div>

      <div className="Add-data">
        <label>name</label>
        <input type="surname" onSubmit={handleChange}></input>
        <label>surname</label>
        <input type="name" onSubmit={handleChange}></input>

        <label>task</label>
        <select onSubmit={handleChange}>
          <option defaultValue>SELECT TASK</option>
          <option value="1" onSubmit={handleChange}>
            HTML
          </option>
          <option value="2">CSS</option>
          <option value="3">REACT</option>
          <option value="4">REDUX</option>
        </select>
        <label>position</label>
        <select onSubmit={handleChange}>
          <option defaultValue>SELECT POSITION</option>
          <option value="1">Junior back-end</option>
          <option value="2">Junior back-end</option>
          <option value="3">Senior front-end</option>
          <option value="4">Senior front-end</option>
        </select>

        <label>salary</label>
        <input type="number" onSubmit={handleChange}></input>
        <label>time</label>
        <input type="time" onSubmit={handleChange}></input>
        <label>food</label>
        <input type="checkbox" value="meat" onSubmit={handleChange}></input>
        <input type="checkbox" value="pizza" onSubmit={handleChange}></input>
        <input type="checkbox" value="pie" onSubmit={handleChange}></input>
        <input type="checkbox" value="hotdog" onSubmit={handleChange}></input>

        <table class="list" id="employee-list">

          <thead>
            {people.map((person, index) => (
            
              <tr key={index}>
                <th>{person.name}</th>
                <th>{person.surname}</th>
                <th>{person.task}</th>
                <th>{person.position}</th>
                <th>{person.salary}</th>
                <th>{person.food}</th>
                <th>{person.date}</th>
                <th>{person.time}</th>
              </tr>
            ))}
          </thead>
          <tbody></tbody>
        </table>
      </div>
        
    </div>
  );      
}

 

export default App;
