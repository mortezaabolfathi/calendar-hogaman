import { configureStore } from "@reduxjs/toolkit";
import  calendarReducer from "./features/calendar/calendar";

export default configureStore ({
    reducer :{
        calendar : calendarReducer,
    },
})