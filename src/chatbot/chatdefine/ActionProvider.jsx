import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useDispatch,useSelector } from 'react-redux'
import { addAge, addName } from '../../redux/counterSlice';
import { useNavigate } from 'react-router-dom';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  //got it handle function 
  function handlegot() {

    const message = createClientMessage("Got it!");

    updateState(message, "Got it!");
  }

  //handle pick a slot 
  const handlepick = () => {
    const message = createChatBotMessage("Pick a slot !", { widget:"date_months", });
    updateState(message);

  }

  //handle date and timme 
  const handleDatetime=(date , time)=>{
  const message= createClientMessage(`${date}  ${time}`);
  updateState(message);
  handlechatName();
  }

  //name chat bot side ka crete 
  const handlechatName=()=>{
    const message=createChatBotMessage("Enter your Name");
    updateState(message,"name  ko set kro")
  }

  //handle addname\

  const handleAddname=(message)=>{
    dispatch(addName(message));
   updateState(message);
    
   handleAge();  
  }

  //hanldle chatbot side age 
  const handleAge=()=>{
    const message=createChatBotMessage("Enter your Age",{ widget:"age_dropdown", });
    updateState(message);
  }

  //hanlde client side age 
  const hanldeageClient=(age)=>{
    const message=createClientMessage(age);
    dispatch(addAge(age));

    updateState(message);
   handleThankyou();
  }


  //hanldleelast msg for thank you

  const handleThankyou=()=>{
    const message=createChatBotMessage("Thank you. In 5 seconds, bot will exit" ,{widget :"countdown"});
    updateState(message);
  }



  //update state of messgae

  const updateState = (message, checker = "") => {

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker
    }));
  }


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handlegot,
            handlepick,
            handleDatetime,
            handlechatName,
            handleAddname,
            handleAge,
            hanldeageClient,
            handleThankyou
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
