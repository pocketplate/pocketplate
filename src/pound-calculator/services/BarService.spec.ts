import { BarService } from './BarService';

describe('BarService', () => {
  let service: BarService;
  const A_WEIGHT = 250;

  beforeEach(() => {
    service = new BarService();
  });

  describe('fromWeightToBarLoad', () => {
    it('should return empty array when weights are negatives', () => {
      const result = service.fromWeightsToBarLoad(-1);

      expect(result).toStrictEqual([]);
    });

    it('should return array with entry when weights are positives', () => {
      const result = service.fromWeightsToBarLoad(A_WEIGHT);

      expect(result).toStrictEqual([A_WEIGHT]);
    });
  });
});
