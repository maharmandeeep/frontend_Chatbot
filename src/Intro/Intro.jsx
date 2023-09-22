import "./intro.scss";
import { Link } from "react-router-dom";

function Intro(){ 


    return(
        <>
        
        <div className="introcontainer">
            <div className="left">
           <img src="src/assets/8262263.jpg" alt="img"/>
            </div>
            <div className="right">
            <p>Enter into Student Info System</p>
            <Link className="button" to="/chat">Enroll Now!</Link>
            </div>
        </div>

        
       </>
    )
}


export default Intro;