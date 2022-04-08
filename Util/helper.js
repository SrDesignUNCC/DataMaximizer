
export const sumMergeArrayOfObjs = (data) => {
  
  const result = {}

  data.forEach(basket => {
    for (let [key, value] of Object.entries(basket)) {
      if (result[key]) {
        result[key] += value
      } else {
        result[key] = value
      }
    }
  })

  return result

}

export const countErrors = (errorObj) => {

  let obj = {...errorObj}
  delete obj['none']

  const sumValues = obj => Object.values(obj).reduce((a, b) => a + b)
  return sumValues(obj)
}