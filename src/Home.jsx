import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';






function Home(){

    return(
        <>
        
        <div style={{
        justifyContent:"space-between",
        display:"flex",
        backgroundColor:'black',
        
        }}>
     <div style={{ display:'flex',padding :"18px"}}>
        
     <Typography variant={"h6"} style={{color:"white",marginRight:"20px",marginLeft:"50px"}}>Abstract </Typography>
     <Typography variant={"h6"} style={{color:"white"}}> Help Center</Typography>
    
     </div>
     <div style={{padding:'20px'}}>
       <Button variant="outlined" style={{marginRight:"20px",color:'white'}}> Submit a request </Button> 
       <Button variant="contained"style={{marginRight:"50px"}} > Sign in </Button>
     </div>

    </div>  

    <div style={{
        backgroundColor:'#dadbf1',
        height:"280px",
        padding:'80px'
    }}>
        <Typography variant={"h2"} style={{textAlign:'center'}}>How can we help? </Typography>
        <TextField variant="outlined" label="Search" color=''   style={{width:'560px',marginLeft:'420px',marginTop:'20px'}} />
    </div>

    


   

    
    
    
    



 


    </> 
    )
}

export default Home;