import React, { useEffect, useRef, useState } from "react";
import Style from "./TerminalSlide.module.scss";

const skills = [
    { name: "JavaScript", proficiency: 90 },
    { name: "React", proficiency: 85 },
    { name: "Node.js", proficiency: 80 },
    { name: "CSS", proficiency: 95 },
    { name: "Python", proficiency: 75 },
    { name: "Django", proficiency: 70 },
    { name: "Flutter", proficiency: 80 },
    { name: "Firebase", proficiency: 85 },
    { name: "SQL", proficiency: 70 },
    { name: "Git", proficiency: 90 }
];

function TerminalSlide() {
    const [isInView, setIsInView] = useState(false);
    const terminalRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.5 }
        );

        if (terminalRef.current) {
            observer.observe(terminalRef.current);
        }

        return () => {
            if (terminalRef.current) {
                observer.unobserve(terminalRef.current);
            }
        };
    }, []);

    return (
        
        <div className={Style.terminalSlide} ref={terminalRef}>
            <div className={Style.header}>
                <span className={Style.red} />
                <span className={Style.amber} />
                <span className={Style.green} />
            </div>
            <div class="heading" style={{color:'#CA6BE6', fontSize: '1.5rem', margin:'1.5rem 0 0 1.5rem', fontFamily: 'Courier, monospace'}}>
                <h3>shriyasandilya $<span style={{color: `white`}}> cd skills/level</span></h3>
            </div>
            <div className={Style.content}>
                {skills.map((skill, index) => (
                    <div key={index} className={Style.skill}>
                        <span>{skill.name}</span>
                        <div className={Style.barContainer}>
                            <div
                                className={Style.bar}
                                style={{
                                    width: isInView ? `${skill.proficiency}%` : "0%"
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TerminalSlide;
