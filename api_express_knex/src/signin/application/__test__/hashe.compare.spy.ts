import { IHashCompare } from '../protocols/hashe.compare'

export class HashCompareSpy implements IHashCompare {
  public original: string;
  public hash: string;
  public result = true

  public async compare (original: string, hash: string): Promise<boolean> {
    this.original = original
    this.hash = hash
    return Promise.resolve(this.result)
  }
}
