import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const cursor = cursorRef.current;
            if (!cursor) return;

            // 페이지 좌표 계산 (스크롤을 고려)
            const cursorCx = cursor.offsetWidth / 2;
            const cursorCy = cursor.offsetHeight / 2;
            const posX = e.pageX - cursorCx - window.scrollX; // 스크롤 위치 고려
            const posY = e.pageY - cursorCy - window.scrollY; // 스크롤 위치 고려

            cursor.style.transform = `translate(${posX}px, ${posY}px)`;
        };

        document.addEventListener('mousemove', moveCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return <div className="custom_cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
