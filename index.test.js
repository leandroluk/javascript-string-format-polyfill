require('./index')

describe('String.prototype.format', () => {
  const template = 'Hello {{value}}!'

  it('should return formated value using own content', () => {
    expect('world'.format(template)).toBe('Hello world!')
  });

  it('should return diferent value when is passed', () => {
    expect(''.format(template, { value: 'test' })).toBe('Hello test!')
  })
});