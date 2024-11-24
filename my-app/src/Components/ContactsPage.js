import React from "react";
import "../cssfiles/ContactsPage.css";
import useFetch from "../hooks/useFetch";

function ContactsPage() {
  const { data: contacts, loading, error } = useFetch(
    "http://localhost:5000/api/v1/contacts"
  );

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>Error fetching contacts. Please try again later.</p>;

  return (
    <div className="papaDiv">
      {contacts && contacts.length > 0 ? (
        contacts.map((job, index) => (
          <div key={index} className="contactsPage">
            <div className="right">
              <i className="fa-regular fa-user"></i>
              <div className="info">
                <p>{job.name}</p>
                <p>{job.number}</p>
              </div>
            </div>
            <div className="icons">
              <button className="edit">
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <button className="trash">
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
}

export default ContactsPage;
