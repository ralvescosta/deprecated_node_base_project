export interface Either<L = any, R = any> {
  left: L | undefined,
  right: R | undefined
}
