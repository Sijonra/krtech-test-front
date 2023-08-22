import './IsTyping.scss'
const IsTyping = () =>{
    return(
        <div className={'Is-Typing'}>
            <svg width="23" height="7" viewBox="0 0 23 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 3.5C7 5.43299 5.433 7 3.5 7C1.567 7 0 5.43299 0 3.5C0 1.56701 1.567 0 3.5 0C5.433 0 7 1.56701 7 3.5Z" fill="#2580DB"/>
                <path d="M16 3.5C16 4.88071 14.8807 6 13.5 6C12.1193 6 11 4.88071 11 3.5C11 2.11929 12.1193 1 13.5 1C14.8807 1 16 2.11929 16 3.5Z" fill="#2580DB"/>
                <path d="M21.5 5C22.3284 5 23 4.32843 23 3.5C23 2.67157 22.3284 2 21.5 2C20.6716 2 20 2.67157 20 3.5C20 4.32843 20.6716 5 21.5 5Z" fill="#2580DB"/>
            </svg>
            <p>Печатает</p>
        </div>
    )
}

export default IsTyping