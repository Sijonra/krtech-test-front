import './User.scss'
import Avatar from "../../common/Avatar";
import IsTyping from "../../common/IsTyping";
import {useEffect, useState} from "react";
import ChatListStore from "../../../stores/chat-list-store";
import {observer} from "mobx-react-lite";
import avatar from '../../../assets/avatar2.png'

interface UserProps {
    id: number,
    name: string,
    message: string,
    time: string,
    isTyping: boolean,
    messagesCount: number,
    isOnline: boolean,
    avatar: string,
    isActive: boolean,
}

const User = observer((props: UserProps) =>{

    let {incrementMessages, setIsTyping, setIsOnline, getTotalMessagesCount, setUserActive, clearUserMessages} = ChatListStore
    //let [userActive, setUserActive] = useState(false)

    useEffect(()=>{
        setInterval(()=>{
            setIsOnline(props.id)
        }, 5000)
    },[])

    //console.log(props.isTyping)
    useEffect(()=>{

        if(props.isOnline){
            let timeout = () => {
                return new Promise(resolve => setTimeout(resolve, 4000));
            }

            const typing = async () =>{
                setIsTyping(props.id)
                await timeout()
                setIsTyping(props.id)
                incrementMessages(props.id)
                getTotalMessagesCount()
            }

            setInterval(()=>{
                if(Boolean(Math.round(Math.random()))){
                    typing()
                }
            }, 10000)
        }


    },[props.isOnline])


    let userOnClick = (id:number) =>{
        setUserActive(id)
        clearUserMessages(id)
        getTotalMessagesCount()
    }

    return(
        <div onClick={()=>{userOnClick(props.id)}} className={props.isActive ? 'User User--is-active' : 'User'}>
            <Avatar size={50} src={avatar} isOnline={props.isOnline}/>
            <div className={'Message-Info'}>
                <h4 className={'User__Name'}>{props.name}</h4>

                {
                    props.isTyping ? <IsTyping /> : <p className={'User__Message-preview'}>{props.message}</p>
                }
                {/*<IsTyping/>*/}
            </div>
            <span className={'Message-Time'}>{props.time}</span>
            <span className={props.messagesCount !== 0 ? 'Unread-Messages' : 'Unread-Messages--unactive'}>{props.messagesCount}</span>
        </div>
    )
})

export default User