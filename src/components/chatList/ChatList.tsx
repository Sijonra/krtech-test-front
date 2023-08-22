import './ChatList.scss'
import UserSearch from "./userSearch/UserSearch";
import User from "./users/User";

const ChatList = () => {
    return (
        <section className={'Chat-List'}>
            <UserSearch/>
            <div className={'Users-List'}>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
            </div>
        </section>
    )
}

export default ChatList