import React from 'react'
import Footer from './Footer'
import Container from '@material-ui/core/Container'
import featursstyles from '../featursstyles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import homeImg from '../images/home-hero.png'
import backgroundImg from "../images/slider-bg.jpg"
import Button from '@material-ui/core/Button'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos' 
import '../My.scss'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MouseImg from '../images/mouse.png'
import ElectrickGuiter from '../images/electric-guitar.png'
import KeyboardImg from '../images/keyboard.png'
import ColorPalette from '../images/color-palette.png'
import Layouts from '../components/Layouts'





export default function Features() {
    const classes = featursstyles();

    return (
     <Box>
                <Box style={{ padding:'160px 0', backgroundImage: `url(${backgroundImg})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover', }}>
        <Container>
            <Box className={classes.homeMainBlog}>
                <Box>
                    <Typography className={classes.HomeHeading} variant='h3'>MAGIC IS IN THE DETAILS</Typography>
                    <Typography className={classes.HomeTitle} variant='body1'>Gogo is the combination of good design, quality code and attention for details.</Typography>
                    <Typography className={classes.HomeTitle} variant='body1'>We used same design language for components, layouts, apps and other parts of the template.</Typography>
                    <Typography className={classes.HomeTitle} variant='body1'>Hope you enjoy it!</Typography>
                    <Box style={{marginTop:'20px',}}>
                        <Button 
                            variant="contained" color="default" className={classes.button}>View Now <ArrowForwardIosIcon style={{fontSize:'13px',}} />
                        </Button>
                    </Box>
                </Box>
                <Box>
                    <Box className={classes.imageBlog}>
                        <img className={classes.homeimg} src={homeImg} alt='image'/>
                    </Box>
                </Box>
            </Box>
            <Box>
              <Grid className={classes.cardBody} container spacing={3}>
               <Grid item lg={3} md={6} sm={6} xs={12}>
                   <Paper className={classes.paper}>
                       <img className={classes.cardImg} src={MouseImg}/>
                       <Typography className={classes.cardHeading} variant='h5'>Right Click Menu</Typography>
                       <Typography className={classes.cardTitle} variant='body1'>Increases overall usability of the project by providing additional actions menu.</Typography>
                   </Paper>
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                   <Paper className={classes.paper}>
                       <img className={classes.cardImg} src={ElectrickGuiter}/>
                       <Typography className={classes.cardHeading} variant='h5'>Video Player</Typography>
                       <Typography className={classes.cardTitle} variant='body1'>Carefully themed multimedia players powered by Video.js library with Youtube support.</Typography>
                   </Paper>
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                   <Paper className={classes.paper}>
                       <img className={classes.cardImg} src={KeyboardImg}/>
                       <Typography className={classes.cardHeading} variant='h5'>Keyboard Shortcuts</Typography>
                       <Typography className={classes.cardTitle} variant='body1'>Increases overall usability of the project by providing additional actions menu.</Typography>
                   </Paper>
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                   <Paper className={classes.paper}>
                       <img className={classes.cardImg} src={ColorPalette}/>
                       <Typography className={classes.cardHeading} variant='h5'>Two Panels Menu</Typography>
                       <Typography className={classes.cardTitle} variant='body1'>Three states two panels icon menu that looks good, auto resizes and does the job well.</Typography>
                   </Paper>
                </Grid>
              </Grid>
          </Box>
          </Container>
      </Box>
         <Container>
            <Box>
              <Layouts/>
            </Box>
         </Container>
     </Box>
     
     
    );
  }