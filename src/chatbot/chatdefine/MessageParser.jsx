import React from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { addName } from '../../redux/counterSlice';

const MessageParser = ({ children, actions }) => {
   
  const {checker}=children.props.state;
  
  
  if(checker=="Got it!"){
    
    actions.handlepick();
  }
  



 

  const parse = (message) => {

  
    
    if(checker==="name  ko set kro"){
      actions.handleAddname(message);
      //console.log(message);
    }

    
    
    

  };
 

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;