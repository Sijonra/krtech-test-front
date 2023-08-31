import {makeAutoObservable} from "mobx";

class SidebarStore{
    constructor() {
        makeAutoObservable(this)
    }

    isOpen: boolean = false;

    setSideBarOpen = () =>{
        this.isOpen = !this.isOpen
    }


}

export default new SidebarStore()