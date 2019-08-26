import { BarStore } from '../stores/BarStore';
import { IBarService, BarService } from '../services/BarService';
import { BarConfiguration } from '../models/BarConfiguration';
import { Container } from 'inversify';

describe('BarStore', () => {
  let barStore: BarStore;
  let barService: IBarService;

  const barConfiguration: BarConfiguration = new BarConfiguration();
  const A_WEIGHT = 255;
  const A_BAR_LOAD = [1,2,3,4,5];

  beforeEach(() => {
    barConfiguration.weight = A_WEIGHT;
    barService = {
      fromWeightsToBarLoad: jest.fn(() => A_BAR_LOAD),
    } as BarService;

    const container = new Container();
    container.bind(BarService).toConstantValue(barService);
    barStore = container.resolve(BarStore);
  });

  describe('compute', () => {
    it('should call barService once', () => {
      barStore.compute();

      expect(barService.fromWeightsToBarLoad).toHaveBeenCalledTimes(1);
    });

    it('should change barLoad value', () => {
      barStore.compute();

      expect(barStore.barLoad).toStrictEqual(A_BAR_LOAD);
    });
  });
});

