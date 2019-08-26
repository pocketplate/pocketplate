import { observable, action } from 'mobx';
import { injectable } from 'inversify';
import { BarInput } from '../models/BarInput';

export interface IBarStore {
  barConfiguration: BarInput
  compute(): Promise<void>
}

@injectable()
export class BarStore implements IBarStore {
  @observable
  public barConfiguration: BarInput = observable.object(new BarInput());

  @action
  public async compute(): Promise<void> {
    console.log(this.barConfiguration.weight);
  }
}
