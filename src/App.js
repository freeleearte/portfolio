import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import './reset.css';

function App() {
  useEffect(() => {
    // 페이지가 로드될 때마다 body 배경색을 변경
    document.body.style.backgroundColor = "#ffffff"; // 기본 배경색

    return () => {
      document.body.style.backgroundColor = ""; // 컴포넌트가 언마운트될 때 기본값으로 복원
    };
  }, []);
  return (
    <div>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
