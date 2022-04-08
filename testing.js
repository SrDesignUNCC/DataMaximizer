
let err = {
  '12Error': 0,
  '13Error': 1,
  '21 Error': 0,
  '23 Error': 0,
  '31 Error': 1,
  '32 Error': 0
}

let event1 = {
  "Event": "createCTA",
  "Location": " pedistol 3",
  "Timestamp": " 4/7/2022 6:31:25 PM",
  "Size": 0,
  "Color": 0,
  "Shape": 1
}

let event2 = {
  "Event": "gaze",
  "Location": " pedistol 3",
  "Timestamp": " 4/7/2022 6:31:26 PM",
  "Size": null,
  "Color": null,
  "Shape": null
}


let time1 = new Date(event1.Timestamp)
let time2 = new Date(event2.Timestamp)
let rt = time2-time1

Object.keys(err).forEach(er => {
  // let val = err[er]
  // err[er] = (val * rt)
})

const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);


console.log(sumValues(err))