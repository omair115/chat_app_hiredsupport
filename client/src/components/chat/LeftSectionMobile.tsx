import React,{ FC } from "react";
import CardContainerLayout from "../cardContainer/CardContainerLayout";
import { ChatHeader, ChatHeading, Chats, NewChatButton ,ChatHistory } from "./LeftSection.styled";
import avatar from "./../../assets/images/avatar.png";
import setting from "./../../assets/images/setting.png";
import chatIcon from "./../../assets/images/chat.png";
import chatIconWhite from "./../../assets/images/chatIconWhite.png";


interface Props {
    children?: React.ReactNode
    onClose : ()=> void
}


const LeftSectionMobile: FC<Props> = ({ children ,onClose}) => {


    return (
        <CardContainerLayout className="bg-[#0C1525] rounded-none pl-8 pr-8" style={{ height: "100%" , position:"fixed", width:"100%" , overflow: "auto"}} >
            <div className="p-2">
            <ChatHeader className="flex flex-row justify-between pt-8">
                <div className="flex justify-items-center align-center ">
                    <img src={avatar} onClick={onClose}/>
                    <p className="pl-4 pt-2">Voyager</p>
                </div>
                <img src={setting} className="w-6 h-6 cursor-pointer" />
            </ChatHeader>

            <ChatHeading className="pt-20">
                Chat history
            </ChatHeading>

            <NewChatButton className="mt-10 mr-6 mb-4 cursor-pointer">
                <div className="flex align-center justify-center space-x-3">
                <img src={chatIconWhite} className="w-6 h-6 mt-4" />
                <p>
                    Start New Chat
                </p>
                </div>
           
            </NewChatButton>

           <div className="max-h-50 overflow-y-scroll">

         
            <div className="pt-6 space-y-4">
                <Chats>
                    <div className="flex flex-row justify-items-center align-center pt-4 space-x-3">
                        <img src={chatIcon} className="w-6 h-6 ml-4"/>
                        <p className="">Store name examples</p>
                    </div>
                </Chats>
                <Chats>
                    <div className="flex flex-row justify-items-center align-center pt-4 space-x-3">
                        <img src={chatIcon} className="w-6 h-6 ml-4"/>
                        <p className="">Store name examples</p>
                    </div>
                </Chats>
                <Chats>
                    <div className="flex flex-row justify-items-center align-center pt-4 space-x-3">
                        <img src={chatIcon} className="w-6 h-6 ml-4"/>
                        <p className="">Store name examples</p>
                    </div>
                </Chats>
            </div>

           
            </div>

            <div className="flex justify-center items-center pt-16">
            <ChatHistory className="flex justify-center items-center space-x-2 cursor-pointer">
                <img src={setting} /> 
                <p>Clear Chat History</p>
          
            </ChatHistory>

            </div>
            </div>
       
        </CardContainerLayout>

    );
}

export default LeftSectionMobile;
