import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Tab_menu.css";
import tabTop from '../asset/tab_top.png';
import right from '../asset/right.png';
import arrow2 from '../asset/arrow2.png';

const Tab_menu = ({ fadeOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const menuRef = useRef(null);
  const wrapRef = useRef(null);

  // 메뉴 열기
  const openMenu = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (menuRef.current) {
        menuRef.current.style.left = '0';
        setShowRight(true)
      }
    }, 10);
  };

  // 메뉴 닫기
  const closeMenu = () => {
    setShowRight(false);
    if (menuRef.current) {
      menuRef.current.style.left = '-100%';
    }
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  useEffect(() => {
    if (wrapRef.current) {
      wrapRef.current.style.display = isOpen ? 'block' : 'none';
    }
  }, [isOpen]);

  const location = useLocation();

  const getTabClass = () => {
    if (location.pathname === '/') return 'tab home';
    if (location.pathname === '/projects') return 'tab projects';
    if (location.pathname === '/profile') return 'tab profile';
    if (location.pathname === '/contact') return 'tab contact';
    return 'tab default';
  };

  const navigate = useNavigate();
  const goHome = () => {
    closeMenu();
    navigate(`/`);
    window.scrollTo(0, 0);
  }
  const goProjects = () => {
    closeMenu();
    navigate(`/projects`);
    window.scrollTo(0, 0);
  }
  const goProfile = () => {
    closeMenu();
    navigate(`/profile`);
    window.scrollTo(0, 0);
  }
  const goContact = () => {
    closeMenu();
    navigate(`/contact`);
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <i className={`fa-solid fa-cube ${getTabClass()} ${fadeOut}`} onClick={openMenu}></i>

      <div className="tab_menu_wrap" ref={wrapRef}>
        <div className="tab_menu" ref={menuRef}>
          <img alt="tab top" src={tabTop} />
          <div className="front">
            <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
            <ul>
              <li><div to="/" className="t_home" onClick={goHome}>HOME</div></li>
              <li><div to="/projects" onClick={goProjects}>PROJECTS</div></li>
              <li><div to="/profile" onClick={goProfile}>PROFILE</div></li>
              <li><div to="/contact" className="t_contact" onClick={goContact}>CONTACT</div></li>
            </ul>
          </div>
        </div>
        <div className={`right ${showRight ? 'show' : ''}`}>
          <div className="info">
            <div className="txt">
              <p>Click to<br />get Started</p>
              <p>각 프레임을<br />네비게이션처럼<br />활용 가능합니다</p>
            </div>
            <img alt="info" src={right} />
          </div>
          <img alt="arrow" src={arrow2} />
        </div>
      </div>
    </div>
  );
};

export default Tab_menu;