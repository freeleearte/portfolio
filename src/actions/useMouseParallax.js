import { useEffect } from 'react';

const useMouseParallax = (refs) => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const posX = e.pageX;
            const posY = e.pageY;
            const moveX = (posX - window.innerWidth / 2) / 50;
            const moveY = (posY - window.innerHeight / 2) / 50;

            refs.forEach((ref, i) => {
                if (ref.current) {
                    const factor = 0.5 + i * 0.2;
                    ref.current.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
                }
            });
        };

        const area = document.querySelector('.start');
        area?.addEventListener('mousemove', handleMouseMove);

        return () => {
            area?.removeEventListener('mousemove', handleMouseMove);
        };
    }, [refs]);
};

export default useMouseParallax;