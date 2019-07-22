import { observable, action } from 'mobx'

export interface IStore {
    test: string;
}

//test pull request
export class Store {
    @observable
    store: IStore = {
        test: 'rick and morty season 4 waiting room'
    }

    @action
    reset() {
        this.store.test = 'reset';
    }
}