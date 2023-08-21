import React from 'react';
import './App.scss';
import './normalize.scss'
import {observer} from "mobx-react-lite";
import SideBar from "./components/sidebar/SideBar";
import ChatList from "./components/chatList/ChatList";
import Chat from "./components/chat/Chat";

let App = observer (() => {
  return (
      <div className="App">
          <SideBar />
          <ChatList />
          <Chat />
      </div>
  );
})

export default App;
