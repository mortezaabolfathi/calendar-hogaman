import "./../../style/header.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return ( 
        <div className="header">
            <h1>August</h1>
            <FontAwesomeIcon icon={faBars} />
        </div>
     );
}
 
export default Header;