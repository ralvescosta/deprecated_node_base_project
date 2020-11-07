import { Request, Response } from 'express'
import { HttpRequest } from '../../../core/infrastructure'
import { IBaseController } from '../../../core/interfaces'

export function RouteAdapt (controller: IBaseController): (req: Request, res: Response) => Promise<void> {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }

    const resolve = await controller.handle(httpRequest)

    res.status(resolve.statusCode).header(resolve.headers).json(resolve.body)
  }
}
