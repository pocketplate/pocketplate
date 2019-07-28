import { observable, action } from 'mobx'

export interface IStore {
    test: string;
}

export class Store {
    @observable
    store: IStore = {
        test: 'Dota Underlords'
    }

    @action
    reset() {
        this.store.test = 'reset';
    }
}