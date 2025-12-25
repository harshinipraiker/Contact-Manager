import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {
    const renderContactList = contacts.map((contact) => {
        return ( <
            Link to = { `/Contact/${contact.id}` }
            state = {
                { contact } } // Passing contact data as state
            key = { contact.id }
            style = {
                { textDecoration: "none", color: "inherit" } } // Styling to remove link styling
            >
            <
            ContactCard contact = { contact }
            clickHandler = { getContactId }
            /> <
            /Link>
        );
    });

    return ( <
        div className = "main" >
        <
        div style = {
            { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "50px 50px 0px" } } >
        <
        h2 style = {
            { margin: 0 } } > Contact List < /h2> <
        Link to = "/add" >
        <
        button className = "ui button blue" > Add Contact < /button> <
        /Link> <
        /div> <
        div className = "ui celled list" > {
            renderContactList.length > 0 ? (
                renderContactList
            ) : ( <
                p > No contacts available < /p>
            )
        } <
        /div> <
        /div>
    );
};

export default ContactList;