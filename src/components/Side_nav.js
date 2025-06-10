import { useNavigate } from "react-router-dom";
import P_Marquee from "./P_Marquee";
import "./SideNav.css"

const Side_nav = ({ show, outActive, inActive }) => {
    const navigate = useNavigate();
    const goProjects = () => {
        navigate(`/projects`);
        window.scrollTo(0, 0);
    }
    const goProfile = () => {
        navigate(`/profile`);
        window.scrollTo(0, 0);
    }
    const goContact = () => {
        navigate(`/contact`);
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <div className={`f_left out ${show ? 'show-content' : ''}`}>
                <P_Marquee text="profile" repeat={25} speed={1} className={`f_profile ${outActive === 'profile' ? 'f_on' : ''}`} onClick={goProfile} />
                <P_Marquee text="contact" repeat={25} speed={1} className={`f_contact ${outActive === 'contact' ? 'f_on' : ''}`} onClick={goContact} />
            </div>
            <div className={`f_left in ${show ? 'show-content' : ''}`}>
                <P_Marquee text="projects" repeat={25} speed={1} className={`f_projects ${inActive === 'projects' ? 'f_on' : ''}`} onClick={goProjects} />
                <P_Marquee text="profile" repeat={25} speed={1} className={`f_profile ${inActive === 'profile' ? 'f_on' : ''}`} onClick={goProfile} />
            </div>
            <div className={`f_right out ${show ? 'show-content' : ''}`}>
                <P_Marquee text="profile" repeat={25} speed={1} className={`f_profile ${outActive === 'profile' ? 'f_on' : ''}`} onClick={goProfile} />
                <P_Marquee text="contact" repeat={25} speed={1} className={`f_contact ${outActive === 'contact' ? 'f_on' : ''}`} onClick={goContact} />
            </div>
            <div className={`f_right in ${show ? 'show-content' : ''}`}>
                <P_Marquee text="projects" repeat={25} speed={1} className={`f_projects ${inActive === 'projects' ? 'f_on' : ''}`} onClick={goProjects} />
                <P_Marquee text="profile" repeat={25} speed={1} className={`f_profile ${inActive === 'profile' ? 'f_on' : ''}`} onClick={goProfile} />
            </div>
        </div>
    );
};

export default Side_nav;
