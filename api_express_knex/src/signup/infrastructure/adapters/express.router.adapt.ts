import { Request, Response } from 'express'
import { HttpRequest } from '../../../core/adapters/http.adapt'
import { Controller } from '../../../core/adapters/controllers'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }

    const httpResponse = await controller.handle(httpRequest)

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      res.status(httpResponse.statusCode).header(httpResponse.headers).json({ ...httpResponse.body })
    }
  }
}
