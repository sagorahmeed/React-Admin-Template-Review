import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';



const featursstyles = makeStyles((theme) =>
  createStyles({
    homeMainBlog:{
        marginTop:'80px',
        [theme.breakpoints.up('md')]: {
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          paddingBottom:'200px',
        },
    },
    homeimg:{
        width: "100%",
        [theme.breakpoints.up('xl')]: {
          marginLeft:'70px',
        },
    },
    HomeHeading:{
      color: 'white',
      fontFamily:'"Nunito",sans-serif',
      fontSize:'50px',
    },
    HomeTitle:{
      color: '#f6f7f8',
      fontFamily:'"Nunito",sans-serif',
      fontSize:'18px',
      padding:'16px 0',
    },
    button:{
      width:'200px',
      height: '45px',
      borderRadius:'30px !important',
    },
    imageBlog:{
      [theme.breakpoints.down('md')] : {
        padding: '150px 0',
      },
    },
    paper:{
      padding: '20px',
      borderRadius:'14px !important',
      textAlign:'center',
    },
    cardImg:{
      height: 'auto',
      width:"70px",
      paddingTop:'15px',
    },
    cardHeading:{
      padding:'15px 0',
      color:'#8F8F8F',
      fontFamily:'"Nunito",sans-serif',
    },
    cardTitle:{
      color: '#b2b2b2',
      padding:'14px 0',
    },

    // layoutsStyle
    layoutBlog:{
      padding:'100px 0',
    },
    blogContent:{
      textAlign:'center',
      maxWidth:'800px',
      margin: 'auto',
    },

    layoutsFeatursHeader:{
      [theme.breakpoints.up('md')]:{
        display: 'flex',
        justifyContent:'space-around',
        alignItems:'center',
      },
    },
    BlogImg:{
      maxWidth: '600px',
      [theme.breakpoints.down('md')]:{
        maxWidth:'500px',
      },
    },
  }),
);


export default featursstyles;