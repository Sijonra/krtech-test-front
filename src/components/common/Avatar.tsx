import './Avatar.scss'

interface AvatarProps{
    src: string
    isOnline: boolean
    size: number,
}

const Avatar = (props: AvatarProps) =>{
    return(
        <div style={{width: props.size, height: props.size}} className={'Avatar Avatar--owner'}>
            <img style={{width: props.size - 5, height: props.size - 5}} className={'Avatar__Img'} src={props.src} alt="avatar"/>
            <div className={props.isOnline ? 'Avatar__Img--is-online' : 'Avatar__Img--is-offline'}></div>
        </div>
    )
}

export default Avatar