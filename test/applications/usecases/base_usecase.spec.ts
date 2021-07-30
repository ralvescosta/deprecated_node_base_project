import { ILogger } from '../../../src/applications/interfaces/i_logger'
import BaseUsecase from '../../../src/applications/usecases/base_usecase'
function makeSut () {
  const logger: ILogger = {
    error: jest.fn,
    info: jest.fn,
    trace: jest.fn,
    warn: jest.fn
  }
  const sut = BaseUsecase({ logger })

  return { sut, logger }
}
describe('BaseUsecase', () => {
  it('doSomething', () => {
    const { sut, logger } = makeSut()
    jest.spyOn(logger, 'info')

    sut.doSomething()

    expect(logger.info).toHaveBeenCalledTimes(1)
  })
})
