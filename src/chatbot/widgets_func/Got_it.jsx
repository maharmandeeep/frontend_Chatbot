

import "./widget.scss";

import React, { useState } from "react";



function Gotit(props) {

    const [fill,setUnfill]=useState(true);

    function handleChnage() {

      
        props.actions.handlegot();
        setUnfill(false);
        

    }


    return (

        fill && <div className="widbutoon" >
            <button onClick={handleChnage}>Got it!</button>

        </div>


    )
}

export default Gotit;