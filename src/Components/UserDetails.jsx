import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import DeleteUser from './DeleteUser'

const UserDetails = () => {
  return (
    <>
      <div className="content" style={{marginTop:30}}>
        <div className="addmin_table">
            <Grid container spacing={5}>
                <Grid item xs={8}>
                    <div className="admin-subTitle"><Typography variant='h4' fontWeight={900}>List of User Details</Typography></div>
                </Grid>
                <Grid item xs={4} textAlign={'right'}>
                   <Button variant='contained'>Add New Users</Button>
                </Grid>
            </Grid>
        </div>

        <ul>
            <li>Hi</li>
            <li>Hiii</li>
        </ul>
        <hr />
        <DeleteUser/>

      </div>
    </>
  )
}

export default UserDetails
