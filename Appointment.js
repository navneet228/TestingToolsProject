import React, { useState, useEffect } from "react";
import "./Appointment.css";
import{ useNavigate } from "react-router-dom";


const Appointment = ({ addorEditStudent, currentId, studentObjects = {} }) => {
  const navigate = useNavigate();
  const initializeFieldValue = {
    name: "",
    email: "",
    phonenumber: "",
    date: "",
    time: "",
    message: ""
  };

  const [values, setValues] = useState(initializeFieldValue);

  useEffect(() => {
    if (currentId === "" || !studentObjects[currentId]) {
      setValues(initializeFieldValue);
    } else {
      setValues(studentObjects[currentId]);
    }
  }, [currentId, studentObjects]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Payment');
    addorEditStudent(values);
    setValues(initializeFieldValue);
  };

  return (
    <div className="appointment">
      <h1>Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} value={values.name} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} value={values.email} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" name="phonenumber" onChange={handleChange} value={values.phonenumber} required />
        </div>
        <div>
          <label>Preferred Date:</label>
          <input type="date" name="date" onChange={handleChange} value={values.date} required />
        </div>
        <div>
          <label>Preferred Time:</label>
          <input type="time" name="time" onChange={handleChange} value={values.time} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" onChange={handleChange} value={values.message} required></textarea>
        </div>
        <div>
          <button type="submit">Request Appointment</button>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
