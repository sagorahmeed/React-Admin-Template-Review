import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) =>
  createStyles({
    menuWrapper:{
      backgroundColor:'white',
      boxShadow:'1px -4px 20px 3px #00000030',
      width: '100%',
      position:'fixed',
      top: '0',
    },
    wrapper:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      padding: '2px 0',
    },
    logo:{
      width:"100px",
      height:'auto',
    },
    menuList:{
      display:'flex',
      alignItems:'center',
    },
    listItem:{
      listStyle:'none',
      margin: '0 20px',
    },
    item:{
      textDecoration:'none',
      color: '#3A3A3A',
      fontFamily:"Nunito,sans-serif",
      textTransform:'uppercase',
      transition:'0.3s',
      fontSize:'16px',
      '&:hover':{
        color:'#AE599F',
        transition:'0.3s',
      }
    },
    buyBtn:{
      backgroundColor:'transparent',
      border: '1px solid gray',
      borderRadius:'40px',
      cursor:'pointer',
      padding: '10px 26px',
      fontSize:'16px',
      fontFamily:"Nunito,sans-serif",
      transition: '0.3s',
      '&:hover':{
        backgroundColor:'#D333BA',
        color: 'white',
        transition: '0.3s',
        border:'1px solid #D333BA',
      },
      '&:focus':{
        outline:'none',
      },
    },
  }),
);
export default useStyles;

