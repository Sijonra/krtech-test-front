import './Chat.scss'
import IsTyping from "../common/IsTyping";
import Message from "./messages/Message";
import {observer} from "mobx-react-lite";
import sidebarStore from "../../stores/sidebar-store";
const Chat = observer( () =>{

    const isOpen = sidebarStore.isOpen

    return(
        <section className={isOpen ? 'Chat-less' : 'Chat'}>
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
                <Message isOwnerMessage={false} message={'lrwehrwhfhwdnflrwehrwhfhwdnfjdwjfdwjnfjlrwehrwhfhwdnflrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwjdwjfdwjnfjwjfwwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={true} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/><Message isOwnerMessage={false} message={'lrwehrwhfhwdnfjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={false} message={'lrwehrwhfhwdnflrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwjdwjfdwjnfjwjfw'}/>
                <Message isOwnerMessage={true} message={'lrwehrlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwlrwehrwhfhwdnfjdwjfdwjnfjwjfwwhfhwdnfjdwjfdwjnfjwjfw'}/><Message isOwnerMessage={false} message={'орп'}/>
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
})

export default Chat