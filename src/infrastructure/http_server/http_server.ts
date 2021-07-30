import { ILogger } from "@applications/interfaces/i_logger";

export default class HttpServer {
  constructor(private readonly logger: ILogger){}
  
  initServer() {
    console.log(this.logger.info)
  }
}