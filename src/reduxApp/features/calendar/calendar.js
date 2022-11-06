import { createSlice } from "@reduxjs/toolkit";

export const calendar =createSlice ({
    name : "calendar",
    initialState:{
        clock:""
    },
    reducers:{
        getDay:(state, action) => {
          
        },
        getTime:(state, action) => {
            const timeClock=action.payload
            state.clock=timeClock;
        }
    }
})

export const {getDay, getTime} = calendar.actions;
export default calendar.reducer;