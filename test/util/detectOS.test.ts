import { detectOS } from '../../src/util/detectOS';

describe('Detect the user OS function', () => {
  it('should be defined', () => {
    expect(detectOS).toBeDefined();
  });
});
