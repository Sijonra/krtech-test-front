import './Chat.scss'
import IsTyping from "../common/IsTyping";
import Message from "./messages/Message";
const Chat = () =>{
    return(
        <section className={'Chat'}>
            <div className='Chat-Info'>
                <p className={'Chat__User-Name'}>Анастасия Александровна</p>
                <div className={'Chat__User-status'}>
                    <IsTyping />
                </div>
            </div>
            <div className={'Chat-Messages'}>
                <Message isOwnerMessage={false} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={false} message={'lrwehrwhfhwdnflrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={true} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/><Message isOwnerMessage={false} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={false} message={'lrwehrwhfhwdnflrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={true} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/><Message isOwnerMessage={false} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={false} message={'lrwehrwhfhwdnflrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={true} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/><Message isOwnerMessage={false} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={false} message={'lrwehrwhfhwdnflrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={true} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/><Message isOwnerMessage={false} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={false} message={'lrwehrwhfhwdnflrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={true} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/><Message isOwnerMessage={false} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={false} message={'lrwehrwhfhwdnflrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={true} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/><Message isOwnerMessage={false} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={false} message={'lrwehrwhfhwdnflrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={true} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/><Message isOwnerMessage={false} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={false} message={'lrwehrwhfhwdnflrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={true} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/><Message isOwnerMessage={false} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={false} message={'lrwehrwhfhwdnflrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={true} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/>
            </div>
            <div className={'Message-Input-Wrapper'}>
                <input className={'Message-Input__Input'} type="text" value={'Написать сообщение...'}/>
            </div>
        </section>
    )
}

export default Chat