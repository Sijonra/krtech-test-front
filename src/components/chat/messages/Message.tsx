import './Messages.scss'

interface MessagePropTypes{
    isOwnerMessage: boolean
    message: string
}
const Message = (props: MessagePropTypes) =>{
    return(
        <div className={props.isOwnerMessage ? 'Message-Container--Owner' : 'Message-Companion'}>
            <div className={props.isOwnerMessage ? 'Message--owner' : 'Message'}>
                <p className={'Message__Content'}>{props.message}</p>
                <span className={'Message__Time'}>8:27</span>
            </div>
        </div>

    )
}

export default Message