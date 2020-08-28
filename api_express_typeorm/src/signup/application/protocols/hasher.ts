export interface IHasher {
  hash: (text: string) => Promise<string>
}
