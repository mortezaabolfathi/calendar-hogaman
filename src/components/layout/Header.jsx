import "./../../style/header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";


const Header = () => {
    const value=moment()

    const currMonthName = () =>{
        return value.format("MMMM")
    }

    const currYear = () => {
        return value.format("YYYY")
    }

    return ( 
        <div className="header">
            <h2>{currMonthName()}</h2>
            <FontAwesomeIcon icon={faBars} />
        </div>
     );
}
 
export default Header;