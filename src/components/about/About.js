import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import TerminalSlide from "./TerminalSlide";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import Portfolio from "../portfolio/miniPort";
import IconLink from "../portfolio/IconLink";

export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function port(){
        <Grid container display={'flex'} justifyContent={'center'}>
                {info.port.map((port, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Box component={'img'} src={port.image} alt={'mockup'} style={{height: '17rem',overflow:'hidden'}}/>
                            <br></br>
                            <h1 style={{fontSize: '2rem'}}>{port.title}</h1>
                            <br></br>
                            <h1 style={{fontSize: '1rem', fontWeight:'normal', textAlign:'center'}}>{port.description}</h1>
                            <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                                alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                                <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                                <IconLink link={port.live} title={'Live Demo'} icon={'fa fa-safari'}/>
                                </Box>
                                <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                                <IconLink link={port.source} title={'Source Code'} icon={'fa fa-code'}/>
                                </Box>
                            </Box>
                        </Box>

                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Box component={'img'} src={port.image} alt={'mockup'} style={{height: '17rem',overflow:'hidden'}}/>
                            <br></br>
                            <h1 style={{fontSize: '2rem'}}>{port.title}</h1>
                            <br></br>
                            <h1 style={{fontSize: '1rem', fontWeight:'normal', textAlign:'center'}}>{port.description}</h1>
                            <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                                alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                                <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                                <IconLink link={port.live} title={'Live Demo'} icon={'fa fa-safari'}/>
                                </Box>
                                <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                                <IconLink link={port.source} title={'Source Code'} icon={'fa fa-code'}/>
                                </Box>
                            </Box>
                        </Box>
                   </Grid>
                ))}
            </Grid>
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    function positions() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                positions/leadership</p>
            <p><span style={{color: info.secColor}}>Positions of Leadership <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.positions.map((positions, index) => (
                    <li key={index}>
                        <Box component={'span'} mr={'1rem'}>{positions.emoji}  {positions.position}   <a href={positions.link}>🔗</a></Box>
                        <br></br>
                        <div style={{color:'#FFBD2E'}}>{positions.org}</div>
                        <div style={{color:'grey', fontSize:'0.8rem', marginBottom:'0.5rem'}}>{positions.description}</div>
                    </li>
                ))}
            </ul>
        </>;
    }

    function achievements() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                positions/leadership</p>
            <p><span style={{color: info.secColor}}>Positions of Leadership <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.positions.map((positions, index) => (
                    <li key={index}>
                        <Box component={'span'} mr={'1rem'}>{positions.emoji}  {positions.position}   <a href={positions.link}>🔗</a></Box>
                        <br></br>
                        <div style={{color:'#FFBD2E'}}>{positions.org}</div>
                        <div style={{color:'grey', fontSize:'0.8rem', marginBottom:'0.5rem'}}>{positions.description}</div>
                    </li>
                ))}
            </ul>
        </>;
    }

    function experience(){
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                expereinces</p>
            <p><span style={{color: info.secColor}}>Experiences <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.experiences.map((experiences, index) => (
                    <li key={index}>
                        <Box component={'span'} mr={'1rem'}>{experiences.emoji}  {experiences.company}   <a href={experiences.link}>🔗</a></Box>
                        <br></br>
                        <div style={{color:'#FFBD2E'}}>{experiences.label}</div>
                        <div style={{color:'grey', fontSize:'0.8rem'}}>{experiences.description}</div>
                    </li>
                ))}
            </ul>
        </>;
    }
    function title(){
        return <>
            <h1 style={{color: info.baseColor, textAlign:'center', color:info.secColor}}>Portfolio . . .</h1>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={experience()}/>
            <Portfolio text={port()}/>
            <br></br>
            <Terminal text={skillsText()}/>
            <TerminalSlide />
            <Terminal text={positions()}/>
            <Terminal text={achievements()}/>
            <Terminal text={miscText()}/>
            <Terminal text={title()}/>
        </Box>
    )
}