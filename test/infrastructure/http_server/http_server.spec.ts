import HttpServer, { server } from '../../../src/infrastructure/http_server/http_server'
import Logger from '../../mocks/logger'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import bodyParser from 'body-parser'

jest.mock('express', () => jest.fn(() => ({
  use: jest.fn(() => ({})),
  json: jest.fn(() => ({})),
  listen: jest.fn(() => ({})),
  get: jest.fn(() => ({}))
})))
jest.mock('cors', () => jest.fn(() => ({})))
jest.mock('helmet', () => jest.fn(() => ({})))
jest.mock('compression', () => jest.fn(() => ({})))
jest.mock('body-parser', () => ({
  json: jest.fn(() => ({}))
}))

function makeSut () {
  const logger = Logger()
  const sut = HttpServer({ logger })

  return {
    logger,
    sut
  }
}

describe('HttpServer', () => {
  it('setup()', () => {
    const { sut } = makeSut()
    jest.spyOn(bodyParser, 'json')

    sut.setup()

    expect(express).toHaveBeenCalledTimes(1)
    expect(cors).toHaveBeenCalledTimes(1)
    expect(helmet).toHaveBeenCalledTimes(1)
    expect(compression).toHaveBeenCalledTimes(1)
    expect(bodyParser.json).toHaveBeenCalledTimes(1)
  })

  it('registerRoute()', () => {
    const { sut } = makeSut()
    const method = 'get'
    const path = '/api'
    const handler = () => {}
    server.get = jest.fn() as any

    sut.registerRoute(method, path, handler)

    expect(server.get).toBeCalledTimes(1)
  })

  it('run()', () => {
    const { sut, logger } = makeSut()
    server.listen = jest.fn((port:number, handler: any) => {
      handler()
    }) as any
    jest.spyOn(logger, 'info')

    sut.run()

    expect(server.listen).toHaveBeenCalledTimes(1)
    expect(logger.info).toHaveBeenCalledTimes(1)
  })
})
