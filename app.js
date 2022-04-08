import { getRawData } from "./data.js";
import { construeEvents, encapsulateEvents, uniqueRuns } from "./Util/dataConstrue.js";
// const config = require('./config.json')

let rawData = getRawData()

let Events = encapsulateEvents(rawData)

let QuantizedEvents = construeEvents(Events)

let RunStats = uniqueRuns(QuantizedEvents)

console.log(RunStats)



import fs from 'fs'

fs.writeFileSync('./output.json', JSON.stringify(RunStats));