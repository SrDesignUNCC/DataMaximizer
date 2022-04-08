
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

export const getSortedKeys = (object) => {
  let sortedObject = Object.keys(object).sort()
  return sortedObject
}

export const sortArray = (array) => {
  let sortedArray = array.sort()
  return sortedArray
}

export const sumObj = (object) => {

  // console.log(object)

  let obj1 = {...object}

  const sumValues = obj => Object.values(obj).reduce((a, b) => a + b)
  return sumValues(obj1)
}