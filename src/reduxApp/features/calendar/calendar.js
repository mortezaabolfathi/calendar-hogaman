import { createSlice } from "@reduxjs/toolkit";

export const calendar = createSlice ({
    name : "calendar",
    initialState:{
        clock:"",
        month:""
    },
    reducers:{
        getMonth:(state, action) => {
          const monthInCalendar = action.payload;
          state.month = monthInCalendar;
        },
        getTime:(state, action) => {
            const timeClock = action.payload
            state.clock = timeClock;
        }
    }
})

export const {getMonth, getTime} = calendar.actions;
export default calendar.reducer;