export function cleanNull(object) {
  const returnValue = {}
  Object.keys(object).map(key => {
    const value = object[key]
    if (value === undefined || value === null || value === '') {
      return
    }
    returnValue[key] = value
  })
  return returnValue
}
