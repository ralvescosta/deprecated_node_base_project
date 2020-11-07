export interface HttpRequest<B = any, P = any, H = any, C = any> {
  body: B,
  params?: P,
  headers?: H
  connection?: C
}

export interface HttpResponse {
  statusCode: 200 | 201 | 203 | 400 | 401 | 403 | 404 | 409 | 415 | 500,
  body: object,
  headers?: object
}

export function success ({ body = {}, headers = undefined }): HttpResponse {
  return {
    statusCode: 200,
    body: body,
    headers: headers
  }
}

export function created ({ body = {}, headers = undefined }): HttpResponse {
  return {
    statusCode: 201,
    body: body,
    headers: headers
  }
}

export function badRequest ({ body = {}, headers = undefined }): HttpResponse {
  return {
    statusCode: 400,
    body: body,
    headers: headers
  }
}

export function unauthorized ({ body = {}, headers = undefined }): HttpResponse {
  return {
    statusCode: 401,
    body: body,
    headers: headers
  }
}

export function forbidden ({ body = {}, headers = undefined }): HttpResponse {
  return {
    statusCode: 403,
    body: body,
    headers: headers
  }
}

export function notFound ({ body = {}, headers = undefined }): HttpResponse {
  return {
    statusCode: 404,
    body: body,
    headers: headers
  }
}

export function conflict ({ body = {}, headers = undefined }): HttpResponse {
  return {
    statusCode: 409,
    body: body,
    headers: headers
  }
}

export function unsupportedMediaType ({ body = {}, headers = undefined }): HttpResponse {
  return {
    statusCode: 415,
    body: body,
    headers: headers
  }
}

export function internalServerError ({ body = {}, headers = undefined }): HttpResponse {
  return {
    statusCode: 500,
    body: body,
    headers: headers
  }
}
