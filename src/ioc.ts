import {asFunction, createContainer, InjectionMode, asValue, AwilixContainer, asClass} from 'awilix'
import pino from 'pino'

import HttpServer from './infrastructure/http_server/http_server'

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
})
export const registerInjections = (): AwilixContainer => {
  const logger = pino({
    enabled: process.env.ENABLE_LOG === 'true',
    level: process.env.LOG_LEVEL || 'warn' 
  })
  container.register({
    logger: asValue(logger),
    httpServer: asClass(HttpServer).singleton()
  })

  return container
}