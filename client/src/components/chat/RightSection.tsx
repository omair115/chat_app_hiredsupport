import React, { FC, useState, useEffect, useRef, ReactEventHandler } from "react";
import CardContainerLayout from "../cardContainer/CardContainerLayout";
import { ChatRight, ChatLeft, ChatFooter, Header } from "./RightSection.styled";
import { Button, createTheme, InputAdornment, ThemeProvider } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import avatar from "./../../assets/images/avatar.png";
import LeftSectionMobile from "./LeftSectionMobile";
import { useSelector } from "react-redux";
import { getAuthUser } from "../../data/redux/selectors";
import socketioclient from "socket.io-client"
 
const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            color: "#ffffff",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#213862",
            borderRadius: "20px", // Adjust the border radius as needed
          },
          "& .MuiOutlinedInput-input::placeholder": {
            color: "#818A9C",
            opacity: 1,
          },
          "& .MuiOutlinedInput-label": {
            color: "#ffffff",
            opacity: 1,
          },
        },
      },
    },
  },
});

interface Props {
  children?: React.ReactNode;
}

let socket:any;
const ENDPOINT = "http://localhost:3001"

const RightSection: FC<Props> = ({ children }) => {
  
  const user = useSelector(getAuthUser);
  const [open, setIsOpen] = useState(false);
  const [message , setMessage] = useState("")
  const [chat, setChat] = useState<any>([ ]);
  const [typingUser , setTypingUser] = useState("")

  const chatEndRef: any = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(()=>{

    socket = socketioclient(ENDPOINT)
    socket.emit("new-user",user.email)
    socket.on("user-connected",(user: any) => {
      setChat((preChat:any) => [
        ...preChat,
        { message:`${user} joined the chat` , dir: "left"}
      ])
    })

    socket.on("chat-message", (data: { user: any; msg: any; }) => {
      setChat((preChat: any) => [...preChat , {
        user:data.user , message: data.msg , dir:'left'
      }])
    })

    socket.on('user-disconnected' , (user: any) => {
      setChat((preChat: any) => [...preChat , {
        message: `${user} disconnected` , dir:'left'
      }])
    })

    socket.on('user-typing',(user: React.SetStateAction<string>) => {
      setTypingUser(user)
    })

    socket.on('user-stop-typing',(user: React.SetStateAction<string>) => {
      if (typingUser == user) {
        setTypingUser("")
      }
    })

    return ()=> {
      socket.off("chat-message");
      socket.off("user-connected");
      socket.off("user-disconnected");
      socket.off("user-typing");
      socket.off("user-stop-typing");
    };
  },[])

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  const handleClick = () => {
    setIsOpen(!open);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const writeMessage = (e:any) => {
    let currentMessage = e.target.value
    setMessage(currentMessage)
    if (currentMessage == "")
      {
        socket.emit("stop-typing", user.email)
      }
      else {
        socket.emit("typing" , user.email)
      }
  }

  const handleSubmit = () => {
    setChat(( preChat:any )=>[ ...preChat , { user:user.email , message:message , dir:"right" }])
    socket.emit("send-chat-message",message)
    setMessage("")
    setTypingUser("")
    socket.emit('stop-typing',user.email)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <CardContainerLayout
        className="bg-[#1E1E1E] rounded-none"
        ref={chatEndRef}
      >
        <Header className="visible lg:hidden md:hidden">
          <div>
            <p className="ml-20">{user.email}</p>
          </div>
        </Header>

        <div
          className="overflow-y-scroll sm:pt-20 xs:pt-28 lg:pt-0 md:pt-0"
          style={{ maxHeight: "80vh" }}
        >
          {chat.map((i: any , index:number) => {
            return (
              <div className="flex flex-col pl-8 pr-8 pt-4" key={index}>
                {(i.dir === "right" && (
                  <ChatRight className="ml-auto">
                    <p>{i.message}</p>
                  </ChatRight>
                )) || (
                  <ChatLeft className="">
                    <p>{i.message}</p>
                  </ChatLeft>
                )}
                <div ref={chatEndRef} />
              </div>
            );
          })}
           <div className="flex flex-col pl-8 pr-8 pt-4">
           {typingUser && (
            <ChatLeft className="">
              <p>{typingUser} is typing</p>
          </ChatLeft>
          )}
           </div>
   
        </div>
      </CardContainerLayout>
      <ChatFooter className="mt-20">
        <ThemeProvider theme={theme}>
          <div className="pr-8 pl-12 pt-2 pb-3">
            <OutlinedInput
              placeholder="Type your message"
              inputProps={{
                style: { color: "#fff" },
              }}
              endAdornment={<InputAdornment position="start"> <Button onClick={handleSubmit}>Send</Button></InputAdornment>}
              name="chat"
              fullWidth
              onChange={writeMessage}
              value={message}
            />
        
          </div>
        </ThemeProvider>
      </ChatFooter>
      {open && <LeftSectionMobile onClose={handleClose} />}
    </div>
  );
};

export default RightSection;
