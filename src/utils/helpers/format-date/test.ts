import { dateFormatter } from '.';

const value = '2021-03-26T11:51:15';

describe('function dateFormater()', () => {
  it('should format date correctly', () => {
    expect(dateFormatter({ date: value })).toBe(`26/03/2021`);
  });

  it('should format date when customOptions is passed', () => {
    expect(
      dateFormatter({
        date: value,
        customOptions: {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: 'numeric',
          second: 'numeric'
        }
      })
    ).toBe(`26/03/2021 11:51:15`);
  });

  it('should return undefined when undefined is passed', () => {
    expect(dateFormatter({ date: undefined })).toStrictEqual(undefined);
  });
});
