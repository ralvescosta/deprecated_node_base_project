import HttpResponseFactory from '../../src/shared/http_response_factory'

function makeSut () {
  const sut = HttpResponseFactory()

  return { sut }
}

describe('HttpResponseFactory', () => {
  it('ok()', () => {
    const { sut } = makeSut()
    const result = sut.ok()

    expect(result.statusCode).toEqual(200)
  })

  it('created()', () => {
    const { sut } = makeSut()
    const result = sut.created()

    expect(result.statusCode).toEqual(201)
  })

  it('noContent()', () => {
    const { sut } = makeSut()
    const result = sut.noContent()

    expect(result.statusCode).toEqual(204)
  })

  it('badRequest()', () => {
    const { sut } = makeSut()
    const result = sut.badRequest()

    expect(result.statusCode).toEqual(400)
  })

  it('unauthorized()', () => {
    const { sut } = makeSut()
    const result = sut.unauthorized()

    expect(result.statusCode).toEqual(401)
  })

  it('forbidden()', () => {
    const { sut } = makeSut()
    const result = sut.forbidden()

    expect(result.statusCode).toEqual(403)
  })

  it('notFound()', () => {
    const { sut } = makeSut()
    const result = sut.notFound()

    expect(result.statusCode).toEqual(404)
  })

  it('conflict()', () => {
    const { sut } = makeSut()
    const result = sut.conflict()

    expect(result.statusCode).toEqual(409)
  })

  it('unsupportedMediaType()', () => {
    const { sut } = makeSut()
    const result = sut.unsupportedMediaType()

    expect(result.statusCode).toEqual(415)
  })

  it('internalServerError()', () => {
    const { sut } = makeSut()
    const result = sut.internalServerError()

    expect(result.statusCode).toEqual(500)
  })
})
