import { getRawData } from "./data.js";
import { construeEvents, encapsulateEvents } from "./Util/dataConstrue.js";

let rawData = getRawData()

let Events = encapsulateEvents(rawData)

let QuantizedEvents = construeEvents(Events)

// let RunStats = 

console.log(QuantizedEvents)