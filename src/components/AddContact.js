import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function AddContact({ addContactHandler }) {
    const [contact, setContact] = useState({ name: "", email: "" });
    const navigate = useNavigate(); // Hook for navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({...prevContact, [name]: value }));
    };

    const handleAddContact = (e) => {
        e.preventDefault();
        if (contact.name === "" || contact.email === "") {
            alert("All fields are mandatory!");
            return;
        }

        addContactHandler(contact); // Update the contact list and local storage
        setContact({ name: "", email: "" }); // Clear form fields
        navigate("/"); // Redirect to the contact list page
    };

    return ( <
        div className = "ui main" >
        <
        div style = {
            { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "50px 0px 10px" } } >
        <
        h2 > Add Contact < /h2> <
        /div> <
        form className = "ui form"
        onSubmit = { handleAddContact } >
        <
        div className = "field" >
        <
        label > Name < /label> <
        input type = "text"
        name = "name"
        placeholder = "Name"
        value = { contact.name }
        onChange = { handleChange }
        /> <
        /div> <
        div className = "field" >
        <
        label > Email < /label> <
        input type = "email"
        name = "email"
        placeholder = "Email"
        value = { contact.email }
        onChange = { handleChange }
        />  <
        /div> <
        button type = "submit"
        className = "ui button blue" > Add < /button> <
        /form> <
        /div>
    );
}

// PropTypes for type checking
AddContact.propTypes = {
    addContactHandler: PropTypes.func.isRequired,
};

export default AddContact;