import { FlightTimePipe } from './flight-time.pipe';

describe('FlightTimePipe', () => {
  it('create an instance', () => {
    const pipe = new FlightTimePipe();
    expect(pipe).toBeTruthy();
  });
});
