import './UserSearch.scss'
import ChatListStore from "../../../stores/chat-list-store";

const UserSearch = () =>{

    let {searchValue, setSearchValue} = ChatListStore

    return(
        <div className={'Search'}>
            <input placeholder={'Поиск'} type="text" className={'Search__Input'} value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}/>
        </div>
    )

}

export default UserSearch