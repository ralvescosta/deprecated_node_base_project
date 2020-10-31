export type HttpResponse = {
  statusCode: number
  body: any
  headers?: any
}

export type HttpRequest<B = any, P = any, Q = any> = {
  body?: B,
  params?: P,
  query?: Q
}

export type ErrorParams = {
  body: any
  headers?: any
}

export const badRequest = (error: ErrorParams): HttpResponse => {
  Object.assign(error.body, { statusCode: 400 })
  return {
    statusCode: 400,
    body: error.body,
    headers: error?.headers
  }
}

export const unauthorized = (error: ErrorParams): HttpResponse => {
  Object.assign(error.body, { statusCode: 401 })
  return {
    statusCode: 401,
    body: error.body,
    headers: error?.headers
  }
}

export const forbidden = (error: ErrorParams): HttpResponse => {
  Object.assign(error.body, { statusCode: 403 })
  return {
    statusCode: 403,
    body: error.body,
    headers: error?.headers
  }
}

export const notFound = (error: ErrorParams): HttpResponse => {
  Object.assign(error.body, { statusCode: 404 })
  return {
    statusCode: 404,
    body: error.body,
    headers: error?.headers
  }
}

export const conflict = (error: ErrorParams): HttpResponse => {
  Object.assign(error.body, { statusCode: 409 })
  return {
    statusCode: 409,
    body: error.body,
    headers: error?.headers
  }
}

export const unsupportedMediaType = (error: ErrorParams): HttpResponse => {
  Object.assign(error.body, { statusCode: 415 })
  return {
    statusCode: 415,
    body: error.body,
    headers: error?.headers
  }
}

export const serverError = (error: ErrorParams): HttpResponse => {
  Object.assign(error.body, { statusCode: 500 })
  return {
    statusCode: 500,
    body: error.body,
    headers: error?.headers
  }
}

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})
