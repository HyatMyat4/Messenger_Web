"use client";
import React from "react";
import Message_left from "./Message_left";
import Message_right from "./Message_right";
interface Props {
  data: message | any;
  chatid: string;
}
type NewType = {
  SenderId: string;
  SenderProfile: string;
  SenderMessage: string;
  Image: string;
  Link: string;
};

type message = NewType;

function Message_Container({ data, chatid }: Props) {
  console.log(data, "in Main");
  return (
    <div className="w-full h-full overflow-y-scroll px-[15px]">
      {data?.map((message: any) =>
        message.SenderId === chatid ? (
          <Message_left key={message.SenderMessage} message={message} />
        ) : (
          <Message_right key={message.SenderMessage} message={message} />
        )
      )}
    </div>
  );
}

export default Message_Container;
