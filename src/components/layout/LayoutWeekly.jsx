import React from 'react';
import Navbar from './navbar';
import Header from './Header';
const HomeLayout = ({children}) => {
    return ( 
        <div>
            <Header/>
                {children}
            <Navbar/>
        </div>
     );
}
 
export default HomeLayout;