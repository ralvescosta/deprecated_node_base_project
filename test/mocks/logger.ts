import ILogger from '../../src/applications/interfaces/i_logger'
export default (): ILogger => ({
  info: jest.fn,
  trace: jest.fn,
  error: jest.fn,
  warn: jest.fn
})
