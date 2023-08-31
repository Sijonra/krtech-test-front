import './User.scss'
import avatarImg from '../../../assets/avatar2.png'
import Avatar from "../../common/Avatar";
import IsTyping from "../../common/IsTyping";
import {useEffect} from "react";

interface UserProps {
    name: string,
    message: string,
    time: string,
    isTyping: boolean,
    messagesCount: number,
    setIsTyping: Function,
}

const User = (props: UserProps) =>{

    //console.log(props.isTyping)
    useEffect(()=>{
        setInterval(()=>{
            props.setIsTyping()
        }, 1000)
    },[])

    return(
        <div className={'User'}>
            <Avatar size={50} src={avatarImg} isOnline={true}/>
            <div className={'Message-Info'}>
                <h4 className={'User__Name'}>{props.name}</h4>
                <p className={'User__Message-preview'}>{props.message}</p>
                {
                    props.isTyping ? <IsTyping /> : null
                }
                {/*<IsTyping/>*/}
            </div>
            <span className={'Message-Time'}>{props.time}</span>
            <span className={props.messagesCount !== 0 ? 'Unread-Messages' : 'Unread-Messages--unactive'}>{props.messagesCount}</span>
        </div>
    )
}

export default User