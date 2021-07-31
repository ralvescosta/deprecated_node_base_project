export default (cradle: any): void => {
  Object.keys(cradle).forEach((key: string) => {
    if (key.includes('Routes')) {
      cradle[key].register()
    }
  })
}
