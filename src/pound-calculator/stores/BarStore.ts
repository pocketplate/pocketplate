import { observable, action } from 'mobx';
import { injectable, inject } from 'inversify';
import { BarConfiguration } from '../models/BarConfiguration';
import { IBarService, BarService } from '../services/BarService';

export interface IBarStore {
  barConfiguration: BarConfiguration
  barLoad: number[]
  compute(): void
}

@injectable()
export class BarStore implements IBarStore {
  public barConfiguration: BarConfiguration = observable.object(new BarConfiguration());

  @observable
  public barLoad: number[] = [];

  @inject(BarService)
  private barService: IBarService;

  @action
  public compute(): void {
    this.barLoad = this.barService.fromWeightsToBarLoad(this.barConfiguration.weight);
  }
}
