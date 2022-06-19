import {hourToMins} from '.';

describe('Test Utils hours to mins', () => {
  it('given 1 hours, hoursToMin should return 60', () => {
    expect(hourToMins(1)).toBe(60);
  });

  it('given 3 hours, hoursToMin should return 180', () => {
    expect(hourToMins(3)).toBe(180);
  });
});
