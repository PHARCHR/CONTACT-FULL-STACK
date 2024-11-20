import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../cssfiles/ContactsPage.css";
function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getAllContacts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/contacts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setContacts(response.data);
      } catch (error) {
        navigate("/ErrorPage");
      }
    };

    getAllContacts();
  }, [navigate]);

  return (
    <div className="papaDiv">
      {contacts.map((job, index) => (
        <div key={index} className="contactsPage">
          <div className="right">
            <i className="fa-regular fa-user"></i>
            <div className="info">
              <p>{job.name}</p>
              <p>{job.number}</p>
            </div>
          </div>
          <div className="icons">
           <button className="edit"><i className="fa-regular fa-pen-to-square"></i></button> 
            <button className="trash"><i className="fa-regular fa-trash-can"></i></button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ContactsPage;
