import React from "react";
import Navbar from "./navbar";

const Form = (props) => {
  // console.log('props',props)
  const { handleChange, handleSubmit, formData } = props;
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={formData.name}
        ></input>
        <label>surname</label>
        <input name="surname" type="text" onChange={handleChange}></input>
        <label>task</label>
        <select name="task" onChange={handleChange}>
          <option defaultValue>SELECT TASK</option>
          <option value="html">HTML</option>
          <option value="react">REACT</option>
          <option value="css">CSS</option>
          <option value="redux">REDUX</option>
        </select>
        <label>position</label>
        <select name="position" onChange={handleChange}>
          <option defaultValue>SELECT POSITION</option>
          <option value="junior back-end">Junior back-end</option>
          <option value="senior back-end"> Senior back-end</option>
          <option value="junior front-end">Junior front-end</option>
          <option value="senior front-end">Senior front-end</option>
        </select>
        <label>salary</label>

        <input
          onfocus="this.value=''"
          type="number"
          name="salary"
          onChange={handleChange}
        ></input>

        <label>time</label>
        <input
          type="time"
          name="time"
          onChange={handleChange}
        ></input>
        <input
         
          type="date"
          name="date"
          onChange={handleChange}
        ></input>
        <label>food</label>

        <input
          placeholder="sandwich"
          type="checkbox"
          name="food"
          value="sandwich"
          onChange={handleChange}
        ></input>
        <label>Sandwich</label>
        <input
          type="checkbox"
          value="pizza"
          name="food"
          onChange={handleChange}
        ></input>
        <label>pizza</label>
        <input
          type="checkbox"
          value="pie"
          name="food"
          onChange={handleChange}
        ></input>
        <label>pie</label>
        <input
          type="checkbox"
          name="food"
          value="hotdog"
          onChange={handleChange}
        ></input>
        <label>hotdog</label>
        <input type="submit"></input>
      </form>
    </div>
  );
};
<footer>
  <h1> EMPLOYEES REGISTER PAGE</h1>
</footer>
export default Form;
