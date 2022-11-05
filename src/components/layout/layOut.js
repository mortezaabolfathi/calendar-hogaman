import React from 'react';
import Navbar from './navbar';
import Header from './Header';
import UpComing from '../upComing/UpComing';
import Calendar from '../calendar/Calendar';
const HomeLayout = ({children}) => {
    return ( 
        <div>
            <Header/>
            <Calendar/>
                {children}
            <Navbar/>
        </div>
     );
}
 
export default HomeLayout;