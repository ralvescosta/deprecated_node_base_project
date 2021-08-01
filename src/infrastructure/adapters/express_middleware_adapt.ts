import { Request, Response, NextFunction } from 'express'
import { HttpRequest } from '@infra/http_server/http'
import { MiddlewareBase } from '@shared/middleware_base'

export default (middleware: MiddlewareBase, ...params: any[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      headers: req.headers,
      body: req.body,
      auth: (req as any).auth
    }

    const resolve = await middleware.handler(httpRequest, params)

    if (resolve.statusCode >= 400) {
      return res.status(resolve.statusCode).header(resolve?.headers).json({ statusCode: resolve.statusCode, message: resolve.body })
    }

    if (resolve.statusCode === 299) {
      if ((req as any).auth === undefined) {
        (req as any).auth = resolve.body
      } else {
        (req as any).auth = {
          ...(req as any).auth,
          authorization: resolve.body
        }
      }
    }

    return next()
  }
}
