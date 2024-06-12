import React, { FC } from "react";
import CardContainerLayout from "../cardContainer/CardContainerLayout";
import {
  ChatHeader,
} from "./LeftSection.styled";
import logout from "./../../assets/images/logout.png";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { getAuthUser } from "../../data/redux/selectors";
import { useDispatch } from 'react-redux';
import { setUserAuth } from "../../data/redux/actions";
import { useNavigate } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

const LeftSection: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);
  const history = useNavigate();

  const handleLogout = () => {
    dispatch(setUserAuth({email:"",password:""}))
    history("/");
  }

  return (
    <CardContainerLayout
      className="bg-[#0C1525] rounded-none pl-8 pr-8"
      style={{ height: "100vh", position: "fixed", width: "35%" }}
    >
      <ChatHeader className="flex flex-row justify-between pt-8">
        <div className="flex justify-items-center align-center ">
          <Avatar
            sx={{ bgcolor: deepOrange[500] }}
            alt=""
            src="/broken-image.jpg"
          >
            {user?.email?.charAt(0)}
          </Avatar>
          <p className="pl-4 pt-2">{user?.email}</p>
        </div>
        <img src={logout} className="w-6 h-6 cursor-pointer" onClick={handleLogout}/>
      </ChatHeader>
    </CardContainerLayout>
  );
};

export default LeftSection;
