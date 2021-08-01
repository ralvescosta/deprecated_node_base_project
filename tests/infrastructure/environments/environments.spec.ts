import Environments from '../../../src/infrastructure/environments/environments'
import dotEnv from 'dotenv'

jest.mock('dotenv', () => ({
  config: jest.fn
}))

function makeSut () {
  const sut = Environments

  return { sut }
}

describe('Environments', () => {
  beforeEach(() => jest.clearAllMocks())
  it('registerEnvironments()', () => {
    const { sut } = makeSut()
    jest.spyOn(dotEnv, 'config')

    sut.registerEnvironments()

    expect(dotEnv.config).toHaveBeenCalledTimes(1)
    expect(dotEnv.config).toHaveBeenCalledWith({ path: '.env.test' })
  })

  it('Should config .env.development if NODE_ENV is undefined', () => {
    const { sut } = makeSut()
    jest.spyOn(dotEnv, 'config')
    delete process.env.NODE_ENV

    sut.registerEnvironments()

    expect(dotEnv.config).toHaveBeenCalledTimes(1)
    expect(dotEnv.config).toHaveBeenCalledWith({ path: '.env.development' })
  })
})
