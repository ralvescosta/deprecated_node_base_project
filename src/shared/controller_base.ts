import { HttpResponse } from '@infra/http_server/http'

type Params = {body?: any, headers?: any}

export class ControllerBase {
  public ok (params: Params = {}): HttpResponse {
    return {
      statusCode: 200,
      body: params?.body,
      headers: params?.headers
    }
  }

  public created (params: Params = {}): HttpResponse {
    return {
      statusCode: 201,
      body: params?.body,
      headers: params?.headers
    }
  }

  public badRequest (params: Params = {}): HttpResponse {
    return {
      statusCode: 400,
      body: params?.body,
      headers: params?.headers
    }
  }

  public unauthorized (params: Params = {}): HttpResponse {
    return {
      statusCode: 401,
      body: params?.body,
      headers: params?.headers
    }
  }

  public forbidden (params: Params = {}): HttpResponse {
    return {
      statusCode: 403,
      body: params?.body,
      headers: params?.headers
    }
  }

  public notFound (params: Params = {}): HttpResponse {
    return {
      statusCode: 404,
      body: params?.body,
      headers: params?.headers
    }
  }

  public conflict (params: Params = {}): HttpResponse {
    return {
      statusCode: 409,
      body: params?.body,
      headers: params?.headers
    }
  }

  public unsupportedMediaType (params: Params = {}): HttpResponse {
    return {
      statusCode: 415,
      body: params?.body,
      headers: params?.headers
    }
  }

  public internalServerError (params: Params = {}): HttpResponse {
    return {
      statusCode: 500,
      body: params?.body,
      headers: params?.headers
    }
  }
}
