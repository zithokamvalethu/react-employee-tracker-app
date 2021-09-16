import React from "react";

const Table = (props) => {
  const { people } = props;
// console.log(people)
  return (
    <div>
      <table className="list" id="employee-list">
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
          </tr>
        </thead>
      </table>
      <ul>
        {people.map((person, index) => (
          <li key={people}>
            <td>{person.name}</td>
            <td>{person.surname}</td>
            <td>{person.task}</td>
            <td>{person.position}</td>
            <td>{person.salary}</td>
            <td>{person.food}</td>
            <td>{person.date}</td>
            <td>{person.time}</td>
          </li>
        ))}
        
      </ul>
      
    </div>
  );
};

export default Table;
