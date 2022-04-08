
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