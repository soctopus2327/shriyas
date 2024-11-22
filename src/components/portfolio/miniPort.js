import React from 'react';
import PortfolioBlock from "./miniPortBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio({innerRef}) {
    return (
        <Box id={'port'} ref={innerRef}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.port.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} description={project.description} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};