import './User.scss'
import avatarImg from '../../../assets/avatar2.png'
import Avatar from "../../common/Avatar";
import IsTyping from "../../common/IsTyping";
const User = () =>{
    return(
        <div className={'User'}>
            <Avatar src={avatarImg} isOnline={true}/>
            <div className={'Message-Info'}>
                <h4 className={'User__Name'}>Дмитрий Анатольевич</h4>
                <p className={'User__Message-preview'}>Документы будут готовы к вечеру</p>
                {/*<IsTyping/>*/}
            </div>
            <span className={'Message-Time'}>10:43</span>
            <span className={'Unread-Messages Unread-Messages--unactive'}>986</span>
        </div>
    )
}

export default User