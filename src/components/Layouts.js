import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import PlesantImg from '../images/plesant-design.png'
import {Container} from '@material-ui/core'
import featursstyles from '../featursstyles'


export default function Footer() {
    const classes = featursstyles();
    return (
       <Container>
            <Box className={classes.layoutBlog}>
                <Box className={classes.blogContent}>
                    <Typography variant='h2'>Features At a Glance</Typography>
                    <Typography variant='body1'>We tried to create an admin theme that we would like to use ourselves so we listed our priorities. We would like to have a theme that is not over complicated to use, does the job well, contains must have omponents and looks really nice.</Typography>
                </Box>
                <Box className={classes.layoutsFeatursHeader}>
                    <Box>
                        <Typography variant='h3'>Pleasant Design</Typography>
                        <Typography variant='body1'>As a web developer we enjoy to work on something looks nice. It is not an absolute necessity but it really motivates us that final product will look good for user point of view.</Typography>
                        <Typography variant='body1'>So we put a lot of work into colors, icons, composition and design harmony. Themed components and layouts with same design language.</Typography>
                        <Typography variant='body1'>We kept user experience principles always at the heart of the design process.</Typography>
                    </Box>
                    <Box>
                        <img className={classes.BlogImg} src={PlesantImg}/>
                    </Box>
                </Box>
        </Box>
       </Container>
    )
}
