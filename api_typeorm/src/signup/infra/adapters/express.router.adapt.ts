import { Request, Response } from 'express'
import { HttpRequest, HttpResponse } from '../../../shared/adapters/http.adapt'
import { IController } from '../../../shared/interfaces/controller.interface'

export const adaptRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }

    const httpResponse = await controller.handle(httpRequest) as HttpResponse

    res.status(httpResponse.statusCode).header(httpResponse.headers).json(httpResponse.body)
  }
}
