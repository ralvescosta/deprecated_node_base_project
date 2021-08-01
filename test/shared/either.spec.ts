import { Left, left, Right, right } from '../../src/shared/either'

describe('Either', () => {
  it('left()', () => {
    const l = left(new Error())

    expect(l).toBeInstanceOf(Left)
    expect(l.isLeft()).toBeTruthy()
    expect(l.isRight()).toBeFalsy()
  })

  it('right()', () => {
    const r = right(new Error())

    expect(r).toBeInstanceOf(Right)
    expect(r.isRight()).toBeTruthy()
    expect(r.isLeft()).toBeFalsy()
  })
})
