import React from "react";

const generateRows = (studentObjects, onDelete, onEdit) => {
  const rows = [];
  for (let id in studentObjects) {
    rows.push(
      <tr key={id}>
        <td>{studentObjects[id].name}</td>
        <td>{studentObjects[id].email}</td>
        <td>{studentObjects[id].phonenumber}</td>
        <td>{studentObjects[id].date}</td>
        <td>{studentObjects[id].time}</td>
        <td>{studentObjects[id].message}</td>
        <td>
          <button onClick={() => onEdit(id)} className="edit">Edit</button>
          <button onClick={() => onDelete(id)} className="delete">Delete</button>
        </td>
      </tr>
    );
  }
  return rows;
};

const AppointmentList = ({ studentObjects, onDelete, onEdit }) => {
  console.log('AppointmentList Props:', { studentObjects, onDelete, onEdit }); 
  return (
    <div>
      <h1>Patient List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date</th>
            <th>Time</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {generateRows(studentObjects, onDelete, onEdit)}
        </tbody>
      </table>
    </div>
  );
};


export default AppointmentList;