import { IHasher } from '../protocols/hasher'

export class HasherSpy implements IHasher {
  public text: string;
  public result = 'hashed';

  public async hash (text: string): Promise<string> {
    this.text = text
    return Promise.resolve(this.result)
  }
}
