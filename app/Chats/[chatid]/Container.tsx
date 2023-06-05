"use client";
import React from "react";
import Message_box_Nav from "./Message_box_Nav";
import Message_box_input from "./Message_box_input";
import Message_Container from "./Message_Container";
import { useSession } from "next-auth/react";
import { io } from "socket.io-client";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Reactions_Name_data } from "../../../Setting/actionSlice";
interface Props {
  chatid: string;
}
interface Message_Reactions {
  User_Id: string;
  Giver_Name: string;
  Giver_Profile: string;
  Reaction: string;
}

interface message_data {
  SenderId: string;
  SenderProfile: string;
  SenderMessage: string;
  Reactions: {
    Love: Message_Reactions[];
    Haha: Message_Reactions[];
    Care: Message_Reactions[];
    Wow: Message_Reactions[];
    Sad: Message_Reactions[];
    Anger: Message_Reactions[];
  };
  Image: string;
  Link: string;
}

const socket = io("http://localhost:4000/", {
  transports: ["websocket"],
});

function Container({ chatid }: Props) {
  const ReactionsData: Message_Reactions = useSelector(Reactions_Name_data);
  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setdata(message);
      console.log(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const [message, setmessage] = useState<any>("");
  const [showPicker, setshowPicker] = useState<boolean>(false);
  const [SearchFocus, setSearchFocus] = useState<boolean>(false);
  const [data, setdata] = useState<any>();
  const Send_Message = () => {
    const message_data: message_data = {
      SenderId: chatid,
      SenderProfile: "/profile.jpg",
      SenderMessage: message,
      Reactions: {
        Love: [],
        Haha: [],
        Care: [],
        Wow: [],
        Sad: [],
        Anger: [],
      },
      Image:
        "https://www.animesenpai.net/wp-content/uploads/2022/09/maxresdefault-4-1024x576.jpg",
      Link: "",
    };

    //if (message_data.SenderMessage === "") return;
    setmessage("");
    setshowPicker(false);

    socket.emit("sendMessage", message_data);
  };

  function handle_Key(e: any) {
    if (e.key === "Enter") {
      setshowPicker(false);
      Send_Message();
    }
  }

  return (
    <div className="w-full h-screen fccb">
      <Message_box_Nav />
      <Message_Container data={data} chatid={chatid} />
      <Message_box_input
        setmessage={setmessage}
        setshowPicker={setshowPicker}
        setSearchFocus={setSearchFocus}
        message={message}
        showPicker={showPicker}
        SearchFocus={SearchFocus}
        Send_Message={Send_Message}
        handle_Key={handle_Key}
      />
    </div>
  );
}

export default Container;

/*
   switch (ReactionsData.Reaction) {
      case "Love":
        message_data.Reactions.Love.push(ReactionsData);
        break;
      case "Haha":
        message_data.Reactions.Haha.push(ReactionsData);
        break;
      case "Care":
        message_data.Reactions.Care.push(ReactionsData);
        break;
      case "Wow":
        message_data.Reactions.Wow.push(ReactionsData);
        break;
      case "Sad":
        message_data.Reactions.Sad.push(ReactionsData);
        break;
      case "Anger":
        message_data.Reactions.Anger.push(ReactionsData);
        break;
    }
    */
