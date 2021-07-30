import Environments from './infrastructure/environments/environments'
import {registerInjections} from './ioc'

;(() => {
  Environments.registerEnvironments()
  const container = registerInjections()

  const {httpServer} = container.cradle
  
  httpServer.initServer()
})()