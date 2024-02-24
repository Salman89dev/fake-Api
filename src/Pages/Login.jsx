import { Stack, Container, Button, Paper, Typography } from '@mui/material'
// import { Container } from 'postcss'
import React, { useState } from 'react'
import InputComponents from '../Components/InputComponents'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { database, googleAuth } from '../Config/FirebaseConfig'
import GoogleButton from 'react-google-button'

const Logins = () => {
    const [login,setLogin] =useState(false)
    const navigate=useNavigate()

    const submitHandle=(e,type)=>
    {
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        if(type=="signup")
        {
            createUserWithEmailAndPassword(database,email,password).then((data)=>
            {
                navigate("/dashboard")
                console.log(data)
            }).catch((error)=>
            {
                alert(error.message)
                setLogin(true)
            })
        }
        else{
            signInWithEmailAndPassword(database,email,password).then((data)=>
            {
                navigate("/dashboard")
                console.log(data)
            }).catch((error)=>
            {
                alert(error.message)
            })
        }

    }

    const handleGoogleAuth=()=>
    {
        signInWithPopup(database,googleAuth).then((data)=>
        {
            navigate("/dashboard")
        }).catch((error)=>
        {
            alert(error.message)
        })
    }

  return (
    <div>
        <Container maxWidth={'md'} style={{marginTop:50}}>
            <div className='row'>
                <div className={login==false?"activeColor":"pointer" } onClick={()=>setLogin(false)}>Sign Up</div>
                <div className={login==true?"activeColor":"pointer"} onClick={()=>setLogin(true)}>Sign In</div>
            </div>
            <Typography variant='h2' marginTop={3} textAlign={'center'} fontWeight={600}>{login?"Sign In":"Sign Up"}</Typography>
            <Paper style={{padding:50,marginTop:40}} elevation={4}>
                <form onSubmit={(e)=>submitHandle(e,login?"sigin":"signup")}>
                        <InputComponents  placeholder={"Enter Email"} required={true} type={"email"}  id={"email"} />
                        <InputComponents placeholder={"Enter Password"} required={true} type={"password"}  id={"password"} />
                    <Button variant='contained' color='success' fullWidth style={{padding:13,fontSize:18,fontWeight:600,fontFamily:'monospace'}}  type='submit'>{login?"Sign in": "Sign Up"}</Button>
                </form>
                {/* <Button >Signin With Google</Button> */}
                <GoogleButton style={{fontSize:16,fontFamily:"sans-serif",fontWeight:600,color:'#000',width:"100%",marginTop:15}} type="light" label={login==false?"Sign up With Google":"Sign in With Google"} fontWeight={700} onClick={handleGoogleAuth} />
            </Paper>

        </Container>
    </div>
  )
}

export default Logins
