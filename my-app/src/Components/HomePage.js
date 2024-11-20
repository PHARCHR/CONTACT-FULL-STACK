import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../cssfiles/HomePage.css";
import axios from "axios";
function HomePage() {
  const token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const navigate = useNavigate();
  const goToContacts = async(e) => {
    e.preventDefault();
    if (name === "" || number === -1) {
      alert("Please fill out the form properly");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/v1/contacts",{
        name,
        number,
        
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })
      navigate("/ContactsPage");
      
    } catch (error) {
      navigate("/ErrorPage");
    }
   
  };
  return (
    <div className="homePage">
      <h1>Welcome to our HomePage</h1>
      <form onSubmit={goToContacts}>
        <i className="fa-regular fa-address-book"></i>
        <h2>Contacts From</h2>
        <input
          type="text"
          placeholder="Add  the name of your contacts here"
          className="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Add their number here"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button>Add contacts</button>
        
      </form>
    </div>
  );
}

export default HomePage;
