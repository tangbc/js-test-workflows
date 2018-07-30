import sum from '../src/sum'

describe('Karma3 + webpack4 + es6', () => {
  it('test1', () => {
    expect(sum(1)).toBe(1)

    expect(sum(1, 2)).toBe(3)

    expect(sum(1, 2, 3)).toBe(6)
  })
})
