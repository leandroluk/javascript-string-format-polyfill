require('./index')

describe('String.prototype.format', () => {
  const str = 'world'
  const template = 'Hello {{value}}!'

  it('should return formated value using own content', () => {
    expect(str.format(template)).toBe('Hello world!')
  });

  it('should return diferent value when is passed in config with 2 arguments', () => {
    expect(str.format(template, { view: { value: 'test' } })).toBe('Hello test!')
  })

  it('should throw TypeError if props no have valid view', () => {
    expect(() => str.format(template, '')).toThrow()
    expect(() => str.format(template, {})).toThrow()
  })

  it('should return formated value using own content if value is not passed in view', () => {
    expect(str.format(template, { view: {} })).toBe('Hello world!')
  })

  it('should return formated value using own content if pass 3 or more arguments and 2º argument no have value', () => {
    expect(str.format(template, {}, {})).toBe('Hello world!')
  })

  it('should return formated value if pass 3 or more arguments and 2º argument with value prop', () => {
    expect(str.format(template, { value: 'test' }, {})).toBe('Hello test!')
  })
});