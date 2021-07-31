import { HttpResponse } from '@infra/http_server/http'
import IHttpResponseFactory, { Params } from './i_http_response_factory'

export default (): IHttpResponseFactory => ({
  ok: (params: Params = {}): HttpResponse => {
    return {
      statusCode: 200,
      body: params?.body,
      headers: params?.headers
    }
  },

  created: (params: Params = {}): HttpResponse => {
    return {
      statusCode: 201,
      body: params?.body,
      headers: params?.headers
    }
  },

  noContent: (params: Params = {}): HttpResponse => {
    return {
      statusCode: 204,
      body: params?.body,
      headers: params?.headers
    }
  },

  badRequest: (params: Params = {}): HttpResponse => {
    return {
      statusCode: 400,
      body: params?.body,
      headers: params?.headers
    }
  },

  unauthorized: (params: Params = {}): HttpResponse => {
    return {
      statusCode: 401,
      body: params?.body,
      headers: params?.headers
    }
  },

  forbidden: (params: Params = {}): HttpResponse => {
    return {
      statusCode: 403,
      body: params?.body,
      headers: params?.headers
    }
  },

  notFound: (params: Params = {}): HttpResponse => {
    return {
      statusCode: 404,
      body: params?.body,
      headers: params?.headers
    }
  },

  conflict: (params: Params = {}): HttpResponse => {
    return {
      statusCode: 409,
      body: params?.body,
      headers: params?.headers
    }
  },

  unsupportedMediaType: (params: Params = {}): HttpResponse => {
    return {
      statusCode: 415,
      body: params?.body,
      headers: params?.headers
    }
  },

  internalServerError: (params: Params = {}): HttpResponse => {
    return {
      statusCode: 500,
      body: params?.body,
      headers: params?.headers
    }
  }
})
