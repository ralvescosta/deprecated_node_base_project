import { Name } from './name'
import { InvalidNameError } from '../errors/invalid.name.error'

describe('Name', () => {
  it('Should return isLeft = true and value is an instance of InvalidNameError if the name input length is < 3', () => {
    const name = Name.create('na')

    expect(name.isLeft()).toBeTruthy()
    expect(name.isRight()).toBeFalsy()
    expect(name.value).toBeInstanceOf(InvalidNameError)
  })

  it('Should return isLeft = true and value is an instance of InvalidNameError if the name input length is > 255', () => {
    const name = Name.create('name123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585596061626364656667686970717273747576787980818283848586878889909192939495969798991001011021031041051061071081091101111121131141151161171181191201211123124125126127128129130131132133134135136137138139140')

    expect(name.isLeft()).toBeTruthy()
    expect(name.isRight()).toBeFalsy()
    expect(name.value).toBeInstanceOf(InvalidNameError)
  })

  it('Should return isRight = true and Name if the name input is in the correctly format', () => {
    const name = Name.create('name')

    expect(name.isRight()).toBeTruthy()
    expect(name.isLeft()).toBeFalsy()
    expect(name.value).toBeInstanceOf(Name)
  })
})
