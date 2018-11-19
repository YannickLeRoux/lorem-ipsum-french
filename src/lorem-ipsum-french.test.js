const lorem = require('./lorem-ipsum-french');

describe('Lorem Ipsum French', () => {
  it(' should return null if one or both arguments are 0', () => {
    expect(lorem(0,0)).toBe(null);
    expect(lorem(10,0)).toBe(null);
    expect(lorem(0,10)).toBe(null);
  });
})