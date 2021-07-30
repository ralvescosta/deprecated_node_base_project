export interface HttpRequest<THeader = any, TBody = any, TParams = any, TAuth = any, TQuery = any> {
  headers: THeader
  body: TBody,
  params?: TParams,
  auth?: TAuth
  query?: TQuery
}

export interface HttpResponse {
  statusCode: number,
  headers?: any,
  body?: any
}
