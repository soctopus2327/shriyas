import React, { useEffect, useRef, useState } from "react";
import Style from "./TerminalSlide.module.scss";
import {info} from "../../info/Info";

const languages = [
    { name: "Python", proficiency: 90 },
    { name: "C++", proficiency: 90 },
    { name: "Java", proficiency: 80 },
    { name: "SQL", proficiency: 80 },
    { name: "Dart", proficiency: 70 },
    { name: "JavaScript", proficiency: 80 },
    { name: "HTML", proficiency: 100 },
    { name: "CSS/SCSS", proficiency: 90 },
    { name: "R", proficiency: 50 },
];

const frameworks = [
    { name: "React", proficiency: 80 },
    { name: "Flutter", proficiency: 80 },
    { name: "Django", proficiency: 70 },
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
            <h3 style={{fontWeight:'normal', color:info.baseColor, fontSize: '1.5rem', margin:'1.5rem 0 0 1.5rem', fontFamily: 'Courier, monospace'}}>shriyasandilya $<span style={{color: `white`}}> cd skills/level</span></h3>
            <p style={{color:info.secColor, fontSize:'1.5rem', margin:'1rem 0 -0.5rem 1.7rem'}}>Level of Skills <span style={{color:'#27C93F'}}>(main)</span> $ <span style={{color:'white'}}>ls</span></p>
            <div className={Style.content}>
            <p style={{color:'#FFBD2E', fontSize:'1.5rem', marginBottom:'1rem'}}>Languages </p>
                {languages.map((lang, index) => (
                    <div key={index} className={Style.skill}>
                        <span>{lang.name}</span>
                        <div className={Style.barContainer}>
                            <div
                                className={Style.bar}
                                style={{
                                    width: isInView ? `${lang.proficiency}%` : "0%"
                                }}
                            />
                        </div>
                    </div>
                ))}
            <p style={{color:'#FFBD2E', fontSize:'1.5rem', marginBottom:'1rem'}}>Frameworks </p>
                {frameworks.map((fw, index) => (
                    <div key={index} className={Style.skill}>
                        <span>{fw.name}</span>
                        <div className={Style.barContainer}>
                            <div
                                className={Style.bar}
                                style={{
                                    width: isInView ? `${fw.proficiency}%` : "0%"
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
