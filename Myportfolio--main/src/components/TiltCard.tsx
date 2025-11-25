import React, { useRef, useState, ReactNode } from 'react';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    tiltMaxAngle?: number;
    scale?: number;
    transitionSpeed?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
    children,
    className = '',
    tiltMaxAngle = 10,
    scale = 1.02,
    transitionSpeed = 400,
}) => {
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * tiltMaxAngle;
        const rotateX = (-(y - centerY) / centerY) * tiltMaxAngle;

        setTilt({ rotateX, rotateY });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setTilt({ rotateX: 0, rotateY: 0 });
    };

    return (
        <div
            ref={cardRef}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${isHovering ? scale : 1})`,
                transition: `transform ${transitionSpeed}ms cubic-bezier(0.23, 1, 0.32, 1)`,
            }}
        >
            {children}
            {/* Glare effect */}
            {isHovering && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at ${(tilt.rotateY / tiltMaxAngle + 1) * 50}% ${(tilt.rotateX / tiltMaxAngle + 1) * 50}%, rgba(255,255,255,0.1) 0%, transparent 60%)`,
                        transition: `background ${transitionSpeed}ms cubic-bezier(0.23, 1, 0.32, 1)`,
                    }}
                />
            )}
        </div>
    );
};

export default TiltCard;
