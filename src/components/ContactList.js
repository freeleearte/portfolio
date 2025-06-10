import React from "react";
import ContactItem from "./ContactItem";
import "./ContactList.css";
import personalQR from '../asset/chunkymonkeyfunky.jpg';
import artQR from '../asset/freeleearte.jpg';

const ContactList = () => {
    const handleCopy = (type) => {
        let elementId = '';
        let successMsg = '';

        switch (type) {
            case 'email':
                elementId = 'copyTxtEmail';
                successMsg = '이메일이 복사되었습니다.';
                break;
            case 'personal':
                elementId = 'copyTxtPersonal';
                successMsg = 'Personal 인스타그램이 복사되었습니다.';
                break;
            case 'art':
                elementId = 'copyTxtArt';
                successMsg = 'Art 인스타그램이 복사되었습니다.';
                break;
            default:
                return;
        }

        const text = document.getElementById(elementId)?.textContent || '';

        navigator.clipboard.writeText(text)
            .then(() => alert(successMsg))
            .catch(err => alert('복사 실패: ' + err));
    };
    return (
        <ul className="c_menu">
            <li>
                <ContactItem
                    type="email"
                    title="Email"
                    iconClass="fa-regular fa-envelope"
                >
                    <a href="mailto:chungho070@gmail.com">
                        <em id="copyTxtEmail">chungho070@gmail.com</em>
                    </a>
                    <i className="fa-solid fa-copy" id="copyBtn" onClick={() => handleCopy('email')}></i>
                </ContactItem>
            </li>

            <li>
                <ContactItem
                    type="instagram"
                    title="Instagram"
                    iconClass="fa-brands fa-instagram"
                >
                    <div className="personal">
                        <em>Personal : <b id="copyTxtPersonal">@chunkymonkeyfunky
                            <i className="fa-solid fa-copy" id="copyBtn" onClick={() => handleCopy('personal')}></i>
                        </b></em>
                        <img alt="chunkymonkeyfunky Instagram QR" src={personalQR} />

                    </div>
                    <div className="art">
                        <em>Art : <b id="copyTxtArt">@freeleearte
                            <i className="fa-solid fa-copy" id="copyBtn" onClick={() => handleCopy('art')}></i>
                        </b></em>
                        <img alt="freeleearte Instagram QR" src={artQR} />
                    </div>
                </ContactItem>
            </li>

            <li>
                <ContactItem
                    type="linkedIn"
                    title="LinkedIn"
                    iconClass="fa-brands fa-linkedin-in"
                >
                    <a href="https://www.linkedin.com/in/chungho-lee/" target="_blank" rel="noopener noreferrer">
                        <em>링크드인 바로가기 <i className="fa-solid fa-link"></i></em>
                    </a>
                </ContactItem>
            </li>
        </ul>
    );
};

export default ContactList;
