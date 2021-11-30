import "./App.css";
import React, { useState } from "react";
import Form from "./components/form";
import Table from "./components/table";
import HomePage from "./components/homePage";
import Edit from "./components/edit";

import { BrowserRouter as Router,Switch ,Route} from "react-router-dom";

function App() {
  const [formData, setFormData] = useState({

    name: "",
    surname: "",
    task: "",
    position: "",
    time: "",
    date: "",

  });

  
  const [people, setPeople] = useState([]);
//  console.log(people);
  const handleChange = (event) => {
   
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {   
    event.preventDefault();
    const { name, task, position, time, surname, date, food } = formData;
    if (name && task && position && time && surname && date && food) {
      setPeople([...people, formData]);
    }
     console.log(formData);
  };



  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/add">
            <Form
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formData={formData}
            />
          </Route>
          <Route path="/view">
            <Table people={people} />
          </Route>
          <Route path="/edit">
            <Edit people={people} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
