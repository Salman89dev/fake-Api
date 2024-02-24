import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(){},
        removeUser(){},
        deleteUsers(){}
    }
})


export default userSlice.reducer;