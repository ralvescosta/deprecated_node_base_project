import Environments from './infrastructure/environments/environments'
import { registerInjections } from './ioc'
import routerConfig from './shared/router_config'

;(() => {
  Environments.registerEnvironments()
  const container = registerInjections()

  const { httpServer } = container.cradle

  httpServer.setup()
  routerConfig(container.cradle)
  httpServer.run()
})()
