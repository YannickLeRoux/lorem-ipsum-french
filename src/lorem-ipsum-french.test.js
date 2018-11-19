const lorem = require('./lorem-ipsum-french');

describe('Lorem Ipsum French', () => {
  it(' should return empty string if paragraph is 0', () => {
    expect(lorem(0)).toBe("");
  });

  it('should return a string', () => {
    expect(typeof lorem(2)).toEqual('string');
  });

  it('should contain dots', () => {
    expect(lorem(5)).toMatch('.');
  });

})