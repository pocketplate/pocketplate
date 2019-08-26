import { injectable } from 'inversify';

export interface IBarService {
  fromWeightsToBarLoad(weights: number): number[];
}

@injectable()
export class BarService implements IBarService {
  public fromWeightsToBarLoad(weights: number): number[] {
    return weights < 0
      ? []
      : [weights];
  }
}
