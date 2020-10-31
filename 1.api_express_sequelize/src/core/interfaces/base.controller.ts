import { Request, Response } from 'express'

export abstract class BaseController {
  protected req: Request;
  protected res: Response;

  protected abstract handle (): Promise<void | any>;

  public execute (req: Request, res: Response): void {
    this.req = req
    this.res = res

    this.handle()
  }

  public static jsonResponse (res: Response, code: number, message: object) {
    return res.status(code).json(message)
  }

  public success<T> (res: Response, data?: T) {
    if (data) {
      return res.status(200).json(data)
    } else {
      return res.status(200).json({})
    }
  }

  public created (res: Response) {
    return res.status(201).json({})
  }

  public badRequest (data: object = { message: 'Bad Request' }) {
    return BaseController.jsonResponse(this.res, 400, data)
  }

  public unauthorized (data: object = { message: 'Unauthorized' }) {
    return BaseController.jsonResponse(this.res, 401, data)
  }

  public paymentRequired (data: object = { message: 'Payment required' }) {
    return BaseController.jsonResponse(this.res, 402, data)
  }

  public forbidden (data: object = { message: 'Forbidden' }) {
    return BaseController.jsonResponse(this.res, 403, data)
  }

  public notFound (data: object = { message: 'Not found' }) {
    return BaseController.jsonResponse(this.res, 404, data)
  }

  public conflict (data: object = { message: 'Conflict' }) {
    return BaseController.jsonResponse(this.res, 409, data)
  }

  public tooMany (data: object = { message: 'Too many requests' }) {
    return BaseController.jsonResponse(this.res, 429, data)
  }

  public internalServerError (error: Error | string) {
    return this.res.status(500).json({
      message: error.toString()
    })
  }
}
