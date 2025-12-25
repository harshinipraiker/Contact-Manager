import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png"; // Adjusted path to the correct location

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    return ( <
        div className = "item"
        key = { id }
        style = {
            { display: "flex", alignItems: "center" } } >
        <
        img className = "ui avatar image"
        src = { user }
        alt = "user" / >
        <
        div className = "content"
        style = {
            { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" } } >
        <
        div >
        <
        Link to = {
            { pathname: '/contact/${id}', state: { contact: props.contact } } } >
        <
        div className = "header" > { name } < /div> <
        div > { email } < /div> <
        /Link> <
        /div> <
        i className = "trash alternate outline icon"
        style = {
            { cursor: "pointer", color: "red" } }
        onClick = {
            () => props.clickHandler(id) } >
        < /i> <
        /div> <
        /div>
    );
};

export default ContactCard;