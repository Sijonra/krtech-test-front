import './Avatar.scss'
import avatarImg from '../../assets/avatar1.png'
const Avatar = () =>{
    return(
        <div className={'avatar'}>
            <img className={'avatar__img'} src={avatarImg} alt="avatar"/>
        </div>
    )
}

export default Avatar