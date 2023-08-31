import {makeAutoObservable} from "mobx";

class ChatListStore{
    constructor() {
        makeAutoObservable(this)
    }
    searchValue: string = ''
    setSearchValue = (value: string) =>{
        this.searchValue = value
    }

    // getRandomIsTyping = ():boolean =>{
    //
    //     let res:boolean = Boolean(Math.round(Math.random()))
    //     console.log(res)
    //     return res;
    // }

    users  = [
        {
            id: 1,
            name: 'Дмитрий Анатольевич',
            message: 'Документы будут готовы к вечеруДокументы будут готовы к вечеру',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            setIsTyping: () =>{
                this.users[0].isTyping = Boolean(Math.round(Math.random()))
            },

        },
        {
            id: 2,
            name: 'Анастасия Александровна',
            message: 'Документы буавыаывопоавпвадпбвадпбвадбду',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.round(Math.random()),
            setIsTyping: () =>{
                this.users[1].isTyping = Boolean(Math.round(Math.random()))
            },
        },
        {
            id: 3,
            name: 'Диалог М',
            message: 'Доступна новая веб-версияДоступна новая веб-версия',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            setIsTyping: () =>{
                this.users[2].isTyping = Boolean(Math.round(Math.random()))
            },
        },
        {
            id: 4,
            name: 'Андрей В.',
            message: 'Добрый день!',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            setIsTyping: () =>{
                this.users[3].isTyping = Boolean(Math.round(Math.random()))
            },
        },
        {
            id: 5,
            name: 'Андрей В.',
            message: 'ДДобрый день!',
            avatar: '',
            time: '10:43',
            isTyping: false,
            messagesCount: Math.floor(Math.random() * 10),
            setIsTyping: () =>{
                this.users[4].isTyping = Boolean(Math.round(Math.random()))
            },
        },
        // {
        //     id: 6,
        //     name: 'Анна',
        //     message: 'Документы будут готовы к вечеруДокументы будут готовы к вечеру',
        //     avatar: '',
        //     time: '10:43',
        //     isTyping: false,
        //     messagesCount: Math.round(Math.random()),
        // },
        // {
        //     id: 7,
        //     name: 'Игорь Хоменко',
        //     message: 'Меня нет на работе. больничМеня нет на работе. больнич',
        //     avatar: '',
        //     time: '10:43',
        //     isTyping: false,
        //     messagesCount: Math.round(Math.random()),
        // },
        // {
        //     id: 8,
        //     name: 'Алина Викторовна',
        //     message: 'И слова, получив текст широко известноИ слова, получив текст широко известно',
        //     avatar: '',
        //     time: '10:43',
        //     isTyping: false,
        //     messagesCount: Math.floor(Math.random() * 10),
        // },
        // {
        //     id: 9,
        //     name: 'Алина Викторовна',
        //     message: 'И слова, получив текст широко известноИ слова, получив текст широко известно',
        //     avatar: '',
        //     time: '10:43',
        //     isTyping: false,
        //     messagesCount: Math.floor(Math.random() * 10),
        // },
        // {
        //     id: 10,
        //     name: 'Вова',
        //     message: 'Создающие собственные вариантыСоздающие собственные вариантыСоздающие собственные варианты ',
        //     avatar: '',
        //     time: '10:43',
        //     isTyping: false,
        //     messagesCount: Math.floor(Math.random() * 10),
        // },
        // {
        //     id: 11,
        //     name: 'Алексей курочкин',
        //     message: 'Создающие собственные вариантыСоздающие собственные варианты ',
        //     avatar: '',
        //     time: '10:43',
        //     isTyping: false,
        //     messagesCount: Math.floor(Math.random() * 10),
        // },
        // {
        //     id: 12,
        //     name: 'Александр Шумский',
        //     message: 'Создающие собственные вариантыСоздающие собственные варианты',
        //     avatar: '',
        //     time: '10:43',
        //     isTyping: false,
        //     messagesCount: Math.floor(Math.random() * 10),
        // },
        // {
        //     id: 13,
        //     name: 'Давыденко Илья',
        //     message: 'Документы будут готовы к вечеруДокументы будут готовы к вечеру',
        //     avatar: '',
        //     time: '10:43',
        //     isTyping: false,
        //     messagesCount: Math.floor(Math.random() * 10),
        // },
        // {
        //     id: 14,
        //     name: 'Кострюков Антон',
        //     message: 'Документы будут готовы к вечеруДокументы будут готовы к вечеру',
        //     avatar: '',
        //     time: '10:43',
        //     isTyping: false,
        //     messagesCount: Math.floor(Math.random() * 10),
        // },
        // {
        //     id: 15,
        //     name: 'Слепцов Никита',
        //     message: 'Документы будут готовы к вечеруДокументы будут готовы к вечеру',
        //     avatar: '',
        //     time: '10:43',
        //     isTyping: false,
        //     messagesCount: Math.floor(Math.random() * 10),
        // },
    ]

}

export default new ChatListStore()