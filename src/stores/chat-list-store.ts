import {makeAutoObservable} from "mobx";

class ChatListStore{
    constructor() {
        makeAutoObservable(this)
    }
    searchValue: string = ''

    setSearchValue = (value: string) =>{
        this.searchValue = value
    }

    setIsTyping = (id: number) =>{
        //this.users[id].isTyping = Boolean(Math.round(Math.random()))
        this.users[id].isTyping = !this.users[id].isTyping
    }

    incrementMessages = (id: number) =>{
        this.users[id].messagesCount = this.users[id].messagesCount + 1;
    }

    setIsOnline = (id:number) =>{
        this.users[id].isOnline = Boolean(Math.round(Math.random()))
    }

    setUserActive = (id:number) =>{
        this.users.forEach(user=>{
            user.isActive = false
        })
        this.users[id].isActive = true
    }

    clearUserMessages = (id:number) =>{
        this.users[id].messagesCount = 0;
    }

    users:Array<{id:number, name: string, message: string, avatar: string, time: string, isTyping: boolean, messagesCount: number, isOnline: boolean, isActive: boolean}>  = [
        {
            id: 0,
            name: 'Дмитрий Анатольевич',
            message: 'Документы будут готовы к вечеруДокументы будут готовы к вечеру',
            avatar: '../../../assets/avatar2.png',
            time: '10:43',
            isTyping: false,
            messagesCount: 0,
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },
        {
            id: 1,
            name: 'Анастасия Александровна',
            message: 'Документы буавыаывопоавпвадпбвадпбвадбду',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: 0,
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },
        {
            id: 2,
            name: 'Диалог М',
            message: 'Доступна новая веб-версияДоступна новая веб-версия',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: 0,
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },
        {
            id: 3,
            name: 'Андрей В.',
            message: 'Добрый день!',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: 0,
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },
        {
            id: 4,
            name: 'Андрей В.',
            message: 'ДДобрый день!',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },
        {
            id: 5,
            name: 'Илья Давыденко',
            message: 'ДДобрый дДДобрый деньДДобрый деньень!',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },
        {
            id: 6,
            name: 'Илья Давыденко',
            message: 'ДДобрый дДДобрый деньДДобрый деньень!',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },
        {
            id: 7,
            name: 'Илья Давыденко',
            message: 'ДДобрый дДДобрый деньДДобрый деньень!',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },
        {
            id: 8,
            name: 'Илья Давыденко',
            message: 'ДДобрый дДДобрый деньДДобрый деньень!',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },
        {
            id: 9,
            name: 'Илья Давыденко',
            message: 'ДДобрый дДДобрый деньДДобрый деньень!',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },
        {
            id: 10,
            name: 'Илья Давыденко',
            message: 'ДДобрый дДДобрый деньДДобрый деньень!',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },
        {
            id: 11,
            name: 'Илья Давыденко',
            message: 'ДДобрый дДДобрый деньДДобрый деньень!',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },
        {
            id: 12,
            name: 'Илья Давыденко',
            message: 'ДДобрый дДДобрый деньДДобрый деньень!',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },
        {
            id: 13,
            name: 'Илья Давыденко',
            message: 'ДДобрый дДДобрый деньДДобрый деньень!',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },
        {
            id: 14,
            name: 'Илья Давыденко',
            message: 'ДДобрый дДДобрый деньДДобрый деньень!',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            isOnline: Boolean(Math.round(Math.random())),
            isActive: false,
        },

    ]
    totalMessages: number = 0;
    getTotalMessagesCount = () =>{
        let res:number = 0;
        this.users.forEach(user=>{
            res += user.messagesCount
        })
        console.log(res)
        this.totalMessages = res;
    }




}

export default new ChatListStore()