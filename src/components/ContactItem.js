import React from "react";
import "./ContactItem.css";

const ContactItem = ({ type, title, iconClass, children }) => {
    return (
        <div className={`item_wrap ${type}`}>
            <div className="top">
                <p>{title}</p>
                <i className={iconClass}></i>
            </div>
            <div className="info">
                {children}
            </div>
        </div>
    );
};

export default ContactItem;
