import { Button, Container, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";

const ProductDetails = () => {
  const navigate=useNavigate()
  const {id}= useParams()
  const [singleProduct,setSingleProduct]=useState("")
  useEffect(()=>
  {
    const getData=axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>
    {
      setSingleProduct(res.data) 
      console.log(res.data)
    }).catch((error)=>
    {
        console.log(error)
    })
  },[])

  const handleNavigate=()=>
  {
    navigate("/dashboard")
  }


  
  return (
    <>

    <Button variant='contained' style={{width:200}} onClick={handleNavigate} >  <IoMdArrowBack fontWeight={900}  fontSize={22}/> Back</Button>
    <Container style={{height:"95vh"}}>
      <Stack justifyContent={'center'} alignItems={'center'} height={'100%'}>
        <div className='text-center'>
            <img style={{margin: "0 auto 20px", display:'block'}} src={singleProduct.image}  width={200} alt="" />
            <Typography variant='h4' fontWeight={600}>{singleProduct.title}</Typography>
            <p>{singleProduct.description}</p>
        </div>
      </Stack>
    </Container>
    </>
  )
}

export default ProductDetails
