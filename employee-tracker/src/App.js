import "./App.css";
import React, { useState } from "react";
import Form from "./components/form";
import Table from "./components/table";

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
    const { name, task, postion, time, surname, date, food } = formData;
    if (name && task && postion && time && surname && date && food) {
      setPeople([...people, formData]);
    }
    // console.log(formData);
  };

  return (
    <div className="container">
      <div className="topnav">
        <a href="./data">ADD DATA</a>
        <a href="./list">VIEW LIST</a>
        <a href="./edit">EDIT INFO</a>
      </div>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
      <Table people={people} />
     
    </div>
  );
}

export default App;
