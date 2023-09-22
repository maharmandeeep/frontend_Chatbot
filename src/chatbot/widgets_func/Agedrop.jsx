
import { useState } from "react";
import "./widget.scss";


function Agedrop(props){

   const [fill,setFill]=useState(true);

  const handleAge= (e)=> {
    
    console.log(e.target.value);
    props.actions.hanldeageClient(e.target.value);
    setFill(!fill);

  }

    return(
       
      
   fill && <div className="agecontsine">
    <select onChange={handleAge} title="Enter your Age" className="select">
      <option>Select your age</option>
      {Array.from({ length: 23 }, (_, i) => i + 18).map((age) => (
        <option key={age} value={age}>
          {age}
        </option>
      ))}
    </select>

    </div> 
  
    )
}

export default Agedrop;