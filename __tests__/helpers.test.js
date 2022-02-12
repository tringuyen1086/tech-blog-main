const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2022-02-12 03:54:03');
    expect(format_date(date)).toBe('2/12/2022');
});