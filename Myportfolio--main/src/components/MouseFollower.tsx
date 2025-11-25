import React, { useEffect, useState } from "react";
import "./MouseFollower.css";

const MouseFollower: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({
        x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
        y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0
    });
    const [followerPosition, setFollowerPosition] = useState({
        x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
        y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        let animationFrame: number;

        const followMouse = () => {
            setFollowerPosition((prev) => {
                const dx = mousePosition.x - prev.x;
                const dy = mousePosition.y - prev.y;

                const distance = Math.sqrt(dx * dx + dy * dy);
                const speed = Math.max(0.08, Math.min(0.15, distance / 60)); // Controls the delay & smoothness

                return {
                    x: prev.x + dx * speed,
                    y: prev.y + dy * speed,
                };
            });

            animationFrame = requestAnimationFrame(followMouse);
        };

        animationFrame = requestAnimationFrame(followMouse);

        return () => cancelAnimationFrame(animationFrame);
    }, [mousePosition]);

    return (
        <div
            className="mouse-follower"
            style={{
                left: `${followerPosition.x}px`,
                top: `${followerPosition.y}px`,
            }}
        />
    );
};

export default MouseFollower;
