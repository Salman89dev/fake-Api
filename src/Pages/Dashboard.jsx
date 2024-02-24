import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ImgMediaCard from '../Components/CardMedia';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { signOut } from 'firebase/auth';
import { database } from '../Config/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';

const Dashboards = () => {
  console.log(database)
  const navigate=useNavigate()
  const[products,setProduct]=useState([])
  useEffect(()=>{
    data()
  },[])
  const data=()=>
  {
    const data=axios.get("https://fakestoreapi.com/products/").then((res)=>
    {
      setProduct(res.data)
    })
  }

  const handleLogout=(e)=>
  {
    e.preventDefault()
    signOut(database).then((value)=>
    {
      console.log(value)

      navigate("/")

    })


  }
  
  return (
    <>
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>

          <Stack flexDirection={'row'} alignItems={'center'}>
            <Typography variant='h6'>{database.currentUser.email}</Typography>
            <Button onClick={handleLogout} color="inherit">Logout</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>

      <div className='flex flex-wrap gap-10 justify-center mt-20'>
        {
          products.map((product,index)=>
          {
            return <ImgMediaCard image={product.image} id={product.id} title={product.title} desc={product.description} key={index}/>
          })
        }
      </div>


    </>
  )
}

export default Dashboards
