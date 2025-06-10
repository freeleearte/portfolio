import { useLocation } from "react-router-dom";
import Tab_menu from "./Tab_menu";
import "./Header.css";

const Header = ({ title, Color, children }) => {
    const location = useLocation();

    const getHeaderClass = () => {
        if (location.pathname === '/') return 'Header home';
        if (location.pathname === '/projects') return 'Header projects';
        if (location.pathname === '/profile') return 'Header profile';
        if (location.pathname === '/contact') return 'Header contact';
        return 'Header default';
    };

    return (
        <div className={`Header ${getHeaderClass()}`} >
            <h2 className="title" style={{ color: Color }}>{title}</h2>
            <div className="middle_content">{children}</div>
            <Tab_menu />
        </div>
    )
}
export default Header;