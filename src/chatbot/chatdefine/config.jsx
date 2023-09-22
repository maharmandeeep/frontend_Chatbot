import { createChatBotMessage } from 'react-chatbot-kit';
import Gotit from '../widgets_func/Got_it.jsx';
import DateList from '../widgets_func/date_months.jsx';
import Agedrop from '../widgets_func/Agedrop.jsx';
import Countdown from '../widgets_func/countdown.jsx';

const config = {
  botName: "Student Info System",
  initialMessages: [createChatBotMessage(` Hello, Welcome to student info system!`,{
    
    widget:"Gotit!",
  })],
  widgets: [
    {
      widgetName: 'Gotit!',
      widgetFunc: (props) => (<Gotit {...props} />),
      
    },{
      widgetName: 'date_months',
      widgetFunc: (props) => (<DateList {...props}/>),
    },{
      widgetName: 'age_dropdown',
      widgetFunc: (props) => (<Agedrop {...props}/>),
    },{
      widgetName: 'countdown',
      widgetFunc: (props) => (<Countdown {...props}/>),

    }
  ]
};

export default config;