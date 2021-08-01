import RouterConfig from '../../src/shared/router_config'

describe('RouterConfig', () => {
  beforeEach(() => jest.clearAllMocks())
  it('routerConfig()', () => {
    const cradle = {
      bookRoutes: {
        register: jest.fn()
      },
      otherThing: {
        register: jest.fn()
      }
    }
    RouterConfig(cradle)
    expect(cradle.bookRoutes.register).toHaveBeenCalledTimes(1)
    expect(cradle.otherThing.register).toHaveBeenCalledTimes(0)
  })
})
