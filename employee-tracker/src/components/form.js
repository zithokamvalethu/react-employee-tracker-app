import React from "react";

const Form = (props) => {
    // console.log('props',props)
    const {handleChange, handleSubmit, formData} = props
  return (
    <div>
      <form>
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
        <select onChange={handleChange}>
          <option defaultValue>SELECT TASK</option>
          <option value="1" onChange={handleChange}>
            HTML
          </option>
          <option value="3" onChange={handleChange}>
            REACT
          </option>
          <option value="2" onChange={handleChange}>
            CSS
          </option>
          <option value="4" onChange={handleChange}>
            REDUX
          </option>
        </select>
        <label>position</label>
        <select onChange={handleChange}>
          <option defaultValue>SELECT POSITION</option>
          <option value="1" onChange={handleChange}>
            Junior back-end
          </option>
          <option value="2" onChange={handleChange}>
            Junior back-end
          </option>
          <option value="3" onChange={handleChange}>
            Senior front-end
          </option>
          <option value="4" onChange={handleChange}>
            Senior front-end
          </option>
        </select>
        <label>salary</label>
        <input type="number" name="number" onChange={handleChange}></input>
        <label>time</label>
        <input type="time" name="time" onChange={handleChange}></input>
        <input type="date" name="date" onChange={handleChange}></input>
        <label>food</label>

        <input
          placeholder="sandwich"
          type="checkbox"
          value="sandwich"
          onChange={handleChange}
        ></input>
        <label>Sandwich</label>
        <input
          type="checkbox"
          value="pizza"
          name="pizza"
          onChange={handleChange}
        ></input>
        <label>pizza</label>
        <input type="checkbox" value="pie" onChange={handleChange}></input>
        <label>pie</label>
        <input type="checkbox" value="hotdog" onChange={handleChange}></input>
        <label>hotdog</label>
        <input type="submit" onSubmit={handleSubmit}></input>
      </form>
    </div>
  );
};

export default Form;
