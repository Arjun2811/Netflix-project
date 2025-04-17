import {useState,React} from 'react'
import './ChatgptScreen.css';

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

import {MainContainer, ChatContainer, MessageList,Message,MessageInput,TypingIndicator} from "@chatscope/chat-ui-kit-react";

const API_KEY = "your Open Ai api key";
function ChatgptScreen() {
const [typing,setTyping]=useState(false);

const[messages,setMessages]=useState([
{

    message:"Hello, I am ArjunGPT!",
    sender: "ChatGPT"
}
])
const handleSend= async(message)=>{

    const newMessage={
        message:message,
        sender:"user",
        direction:"outgoing"
    }

    //update our messages state
    const newMessages=[...messages, newMessage]; // all the old + new messages
    setMessages(newMessages);

    //Seting a typing indicator
    setTyping(true);

//process message to chatgpt(send it over and see the response)
    await processMessageToChatGPT(newMessages);

}
const knowledgeBase = {
    "tell me about your subscription plans": "We offer three plans: \n1. Basic - $5.99/month \n2. Standard - $8.99/month \n3. Premium - $13.99/month. Visit our website for details!",
    "what is your website all about": "This website is a fully functional Netflix clone developed using React.js and Redux, with Firebase handling the backend \n1. It features secure user authentication, allowing users to sign up, log in, and manage their profiles \n2. The platform integrates the TMDb API to display a dynamic movie catalog, offering a rich selection of content \n3. Subscription management is powered by Stripe, enabling users to choose from multiple payment plans, with all data securely stored in the database \n4. The interface is responsive and user-friendly, designed to provide a seamless experience across devices. Key screens include Profile, Signup, Login, Home, and Plan selection, ensuring a personalized and intuitive user journey.",
    "tell me about your website": "This website is a fully functional Netflix clone developed using React.js and Redux, with Firebase handling the backend \n1. It features secure user authentication, allowing users to sign up, log in, and manage their profiles \n2. The platform integrates the TMDb API to display a dynamic movie catalog, offering a rich selection of content \n3. Subscription management is powered by Stripe, enabling users to choose from multiple payment plans, with all data securely stored in the database \n4. The interface is responsive and user-friendly, designed to provide a seamless experience across devices. Key screens include Profile, Signup, Login, Home, and Plan selection, ensuring a personalized and intuitive user journey.",
    "refund policy": "We offer a 7-day refund.",
    "contact support": "Email: as9048843@gmail.com",
    "give me an overview of its features":"User Journey \n\n"+
    "1. Website Access: Users start at the Login page and can proceed to sign up or sign in.\n"+
    "2. Authentication: New users can sign up with an email and password, while returning users can log in.\n"+
    "3. Subscription Selection: After logging in, users can view and select from various subscription plans.\n"+
    "4. Payment Process: Users are redirected to Stripe's checkout page to complete their subscription payment.\n"+
    "5. Home Screen Exploration: Post-subscription, users can explore the Home Screen, which features.\n"+
       "* A navbar with an avatar for profile navigation.\n"+
        "* The Netflix logo for page refresh. \n"+
       "* A movie catalog powered by the TMDb API. \n",
    "overview of its features":"User Journey \n\n"+
       "1. Website Access: Users start at the Login page and can proceed to sign up or sign in.\n"+
       "2. Authentication: New users can sign up with an email and password, while returning users can log in.\n"+
       "3. Subscription Selection: After logging in, users can view and select from various subscription plans.\n"+
       "4. Payment Process: Users are redirected to Stripe's checkout page to complete their subscription payment.\n"+
       "5. Home Screen Exploration: Post-subscription, users can explore the Home Screen, which features.\n"+
          "* A navbar with an avatar for profile navigation.\n"+
           "* The Netflix logo for page refresh. \n"+
          "* A movie catalog powered by the TMDb API. \n",
};

async function processMessageToChatGPT(chatMessages) {
    const lastUserMessage = chatMessages[chatMessages.length - 1].message.toLowerCase();

    // Find a key that matches the user input
    //first it will check in the knowledge base weather the questions exists if not then it will access the api
    const matchedKey = Object.keys(knowledgeBase).find(key => lastUserMessage.includes(key.toLowerCase()));

    if (matchedKey) {
        setMessages([
            ...chatMessages,
            { message: knowledgeBase[matchedKey], sender: "ChatGPT" }
        ]);
        setTyping(false);
        return;
    }






// async function processMessageToChatGPT(chatMessages){
//     //chatMessages{sender:"user" or "ChatGPT",message:"the message content here"};
//     //apiMessages{role:"user" or "assistant",content:"the message content here"}

    let apiMessages=chatMessages.map((messageObject)=>{

        let role="";
        if(messageObject.sender==="ChatGPT")
            {
                role="assistant";
            }
            else{
                role="user";
            }
            return{
                role:role,content:messageObject.message}
                            
    });

    //role:"user"->a message from the user,"assistant-> a response from chatgpt"
    //"system"->generally one intial message defining how we want chatgpt to talk

    const systemMessage={
        role:"system",
        content:"Explain all concepts like i am 10 years old."
    }

const apiRequestBody={

    "model":"gpt-3.5-turbo",
    "messages":[
        systemMessage,
        ...apiMessages //[message1,message2,message3]
]
}



await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",
headers:{
"Authorization":"Bearer "+API_KEY,
"Content-Type":"application/json"
},
body:JSON.stringify(apiRequestBody)
}).then((data)=>{
    return data.json();

}).then((data)=>{
    console.log(data);
    console.log(data.choices[0].message.content);
    setMessages(
        [...chatMessages,{
message:data.choices[0].message.content,
sender:"ChatGPT"
        }]
    );
    setTyping(false);
});
}

  return (
    <div className='Chatgptscreen'>

<div>
<MainContainer>
<ChatContainer>
<MessageList
scrollBehavior='smooth'
typingIndicator={typing?<TypingIndicator content= "Arjun'sGPT is typing" />:null}
>


{
    messages.map((message, i)=>{
        return <Message key={i} model={message}/>
    })
}




</MessageList>
<MessageInput placeholder='Ask me!' onSend={handleSend}/>
</ChatContainer>
</MainContainer>




</div>






    </div>
  )
}

export default ChatgptScreen