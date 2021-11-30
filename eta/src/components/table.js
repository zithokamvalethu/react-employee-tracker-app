import React from "react";
import Navbar from "./navbar";

const Table = (props) => {
  const { people } = props;
  // console.log("peoplepeoplepeople",props);
  return (
    <div>
      <Navbar />

      <br />
      

      <table className="table" id="employee-list">
        <thead>
          <tr>
            <th>name</th>
            <th>surname</th>
            <th>task</th>
            <th>position</th>
            <th>salary</th>
            <th>food</th>
            <th>date </th>
            <th>time</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {people.map((person, id) => (
            <tr key={id}>
              <td>{person.name}</td>

              <td>{person.surname}</td>
              <td>{person.task}</td>
              <td>{person.position}</td>
              <td>{person.salary}</td>
              <td>{person.food}</td>
              <td>{person.date}</td>
              <td>{person.time}</td>
              <div className="editBtn">
                <button className="h2">Edit Employees</button>
              </div>

              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
