
import { useNavigate } from 'react-router-dom';
import "./topbar.scss";
function Topbar(){
   const navigate=useNavigate()
  function handlehome(){
  
    console.log("hello button")


    navigate("/");
  }


    return(
        <>
        <div className="containerTopbar">
            <div className="left">
             <img src="src\assets\happly co.svg" alt="img" onClick={handlehome}/>
            </div>
            <div className="right">
              <div className="threebar">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
        </div>
        </>
    )
}

export default Topbar;