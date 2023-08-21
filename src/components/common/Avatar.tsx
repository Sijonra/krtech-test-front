import './Avatar.scss'

interface AvatarProps{
    src: string
    isOnline: boolean
}

const Avatar = (props: AvatarProps) =>{
    return(
        <div className={'avatar'}>
            <img className={'avatar__img'} src={props.src} alt="avatar"/>
            <div className={props.isOnline ? 'Avatar__Img--is-online' : 'Avatar__Img--is-offline'}></div>
        </div>
    )
}

export default Avatar