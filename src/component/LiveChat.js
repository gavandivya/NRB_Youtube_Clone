import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chatMenu } from "../slice/chatSlice";
import { randomText } from "../config";
import { randomName } from "../config";

const LiveChat = () => {
  const chat = useSelector((state) => state.chat);
  const storeValue = useSelector((store) => store.SideMenu.toggle);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(chatMenu(randomName() + " - " + randomText()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={storeValue ? "col-3 m-2" : "col-3 my-2"}>
      <div className="border border-gray-800 h-96 overflow-y-auto flex flex-col-reverse">
        {chat.map((message) => (
          <p className="p-1 text-sm">
            <i className="fa-solid fa-circle-user px-2"></i>
            {message}
          </p>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(chatMenu("Divya - " + text));
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          placeholder="Enter Comment"
          className="border border-gray-700 p-2 w-80"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default LiveChat;
