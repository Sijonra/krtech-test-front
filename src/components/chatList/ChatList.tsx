import './ChatList.scss'
import UserSearch from "./userSearch/UserSearch";
import User from "./users/User";
import {observer} from "mobx-react-lite";
import ChatListStore from "../../stores/chat-list-store";
import {useEffect, useState} from "react";
import isTyping from "../common/IsTyping";

const ChatList = observer(() => {

    let {users, searchValue} = ChatListStore
    let [currentUsers, setCurrentUsers] = useState(users);


    useEffect(()=>{
        setCurrentUsers(users.filter((user)=> user.name.toLowerCase().includes(searchValue.toLowerCase())))
    },[searchValue])

    return (
        <section className={'Chat-List'}>
            <UserSearch/>
            <div className={'Users-List'}>
                {
                    currentUsers.map((user)=>{
                        return(
                            <User isActive={user.isActive} avatar={user.avatar} isOnline={user.isOnline} id={user.id} name={user.name} time={user.time} message={user.message} isTyping={user.isTyping} messagesCount={user.messagesCount} key={user.id} />
                        )
                    })
                }
            </div>
        </section>
    )
})

export default ChatList