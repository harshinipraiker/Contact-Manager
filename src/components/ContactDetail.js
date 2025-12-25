import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png"; // Adjusted path to the correct location

const ContactDetail = (props) => {
    return ( <
        div className = "main" >
        <
        div className = "ui card centered"
        style = {
            { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "100px 40px 20px" } } >
        <
        div className = "image" >
        <
        img src = { user }
        alt = "user" / >
        <
        /div> <
        div className = "content" >
        <
        div className = "header" > hey < /div> <
        div className = "description" > hey @gmail.com < /div> <
        /div> <
        /div> <
        /div>
    );
};

export default ContactDetail;