import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './chatdefine/config';
import MessageParser from './chatdefine/MessageParser';
import ActionProvider from './chatdefine/ActionProvider';
import "./Chatbot.scss";


function Chatsystem(){

    return(
        <>
        <div className="chatcontainer">
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}

        />

        </div>
     
        </>
    )
}


export default Chatsystem;