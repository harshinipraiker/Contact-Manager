import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import './App.css';
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from "./ContactDetail";

function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        console.log("Adding contact:", contact);
        setContacts((prevContacts) => {
            const updatedContacts = [...prevContacts, { id: uuidv4(), ...contact }];
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts)); // Save immediately after adding
            return updatedContacts;
        });
    };

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => contact.id !== id);
        setContacts(newContactList);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList)); // Update localStorage after removing
    };

    // Retrieve contacts from local storage on initial load
    useEffect(() => {
        const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrievedContacts) {
            console.log("Retrieved contacts from localStorage:", retrievedContacts);
            setContacts(retrievedContacts);
        }
    }, []);

    return ( <
            div className = "ui container" >
            <
            Router >
            <
            Header / >
            <
            Routes > { /* Route for adding a contact */ } <
            Route path = "/add"
            element = { < AddContact addContactHandler = { addContactHandler }
                />} / > { /* Route for displaying the contact list */ } <
                Route path = "/"
                element = { < ContactList contacts = { contacts }
                    getContactId = { removeContactHandler }
                    />} / >
                    <
                    Route path = "/Contact/:id"
                    element = { < ContactDetail / > }
                    /> <
                    /Routes> <
                    /Router> <
                    /div>
                );
            }

            export default App;