import { construeEvents, encapsulateEvents, generateRunStats, sortLevelData, uniqueRuns } from "./Util/dataConstrue.js";
import { getRawData } from "./data.js";
import fs from 'fs'

let rawData = getRawData()

let Events = encapsulateEvents(rawData)

let QuantizedEvents = construeEvents(Events)

let Levels = uniqueRuns(QuantizedEvents)

let sortedLevelsData = sortLevelData(Levels)

fs.writeFileSync('./output.json', JSON.stringify(sortedLevelsData))

let RunStats = generateRunStats(sortedLevelsData)

fs.writeFileSync('./stats.json', JSON.stringify(RunStats))

console.log(RunStats)



