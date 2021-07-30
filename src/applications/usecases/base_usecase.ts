import { ILogger } from '../interfaces/i_logger'

type Injections = {
 logger: ILogger
}

export default ({ logger }: Injections) => ({
  doSomething: () => {
    logger.info({ ok: 'ok' })
  }
})
