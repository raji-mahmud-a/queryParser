const PORT = 42138

const parseQuery = (path) => {
  const ValueKeyPairs = {}
  const checkAndCoerceType = (key, value) =>{
    if (value === 'true') {
     return true
    } else if (value === 'false') {
      return false
    } else if (value === '') {
      return null
    }else if (!isNaN(value)) {
      return Number(value)
    } else {
      return value
    }
  }
  const urlPath = new URL(path, `http://localhost:${PORT}`)
  //console.log(urlPath)
  const queryObject = urlPath.searchParams
  
  const returnKeyValue = (obj)=>{
    obj.forEach((value, key)=>{
      const coercedVal = checkAndCoerceType(key, value)
      if (`${key}` in ValueKeyPairs) {
        if (Array.isArray(ValueKeyPairs[`${key}`])) {
          ValueKeyPairs[`${key}`].push(coercedVal)
        } else {
          ValueKeyPairs[`${key}`] = [
            ValueKeyPairs[`${key}`], coercedVal
          ]
        }
      } else {
        ValueKeyPairs[`${key}`] = coercedVal
      }
    })
  }
  
  returnKeyValue(queryObject)
  
  return ValueKeyPairs
}

module.exports = parseQuery;