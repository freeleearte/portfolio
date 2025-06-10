import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Tab_menu.css";
import tabTop from '../asset/tab_top.png';
import right from '../asset/right.png';
import arrow2 from '../asset/arrow2.png';
import arrow1 from '../asset/arrow_main.png';

const Tab_menu = ({ fadeOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const menuRef = useRef(null);
  const wrapRef = useRef(null);
  const isFlippedRef = useRef(false);

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

  const startMainAnimation = (targetPath) => {
    if (isFlippedRef.current) return;
    
    if (menuRef.current) menuRef.current.style.left = '-100%';

    document.querySelector('.box1')?.classList.add('rotate-shrink-expand');
    document.querySelector('.box2')?.classList.add('rotate-shrink-expand');
    document.querySelector('.box3')?.classList.add('rotate-shrink-expand');
    document.querySelector('i')?.classList.add('fadeout');

    setTimeout(() => {
      document.querySelector('.start')?.classList.add('white-background');
    }, 2000);

    setTimeout(() => {
      document.querySelector('.box1')?.classList.add('hide-box');
      document.querySelector('.box2')?.classList.add('hide-box');
      document.querySelector('.box3')?.classList.add('hide-box');

      // 선택적으로 특정 콘텐츠 show 가능 (예: 페이지별)
    }, 3000);

    isFlippedRef.current = true;

    setTimeout(() => {
      navigate(targetPath);
      window.scrollTo(0, 0);
    }, 3500);
  };

  const location = useLocation();

  const getTabClass = () => {
    if (location.pathname === '/') return 'tab home';
    if (location.pathname === '/projects') return 'tab projects';
    if (location.pathname === '/profile') return 'tab profile';
    if (location.pathname === '/contact') return 'tab contact';
    return 'tab default';
  };

  const navigate = useNavigate();

  const handleTabClick = (path) => {
    closeMenu();
    if (location.pathname === '/') {
      startMainAnimation(path);
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  const goHome = () => {
    closeMenu();
    navigate(`/`);
    window.scrollTo(0, 0);
  }

  const isHome = location.pathname === '/';
  const arrowImage = isHome ? arrow1 : arrow2;

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
              <li><div to="/projects" onClick={() => handleTabClick('/projects')}>PROJECTS</div></li>
              <li><div to="/profile" onClick={() => handleTabClick('/profile')}>PROFILE</div></li>
              <li><div to="/contact" onClick={() => handleTabClick('/contact')}>CONTACT</div></li>
            </ul>
          </div>
        </div>
        <div className={`right ${showRight ? 'show' : ''}  ${isHome ? 'r_main' : ''}`}>
          <div className="info">
            <div className="txt">
              <p>Click to<br />get Started</p>
              <p>각 프레임을<br />네비게이션처럼<br />활용 가능합니다</p>
            </div>
            <img alt="info" src={right} />
          </div>
          <img alt="arrow" src={arrowImage} />
        </div>
      </div>
    </div>
  );
};

export default Tab_menu;