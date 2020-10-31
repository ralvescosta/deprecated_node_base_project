export interface IHashCompare {
  compare: (original: string, hash: string) => Promise<boolean>
}
