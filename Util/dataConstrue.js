import { countErrors, sumMergeArrayOfObjs, sumObj } from "./helper.js"
import { validateLocation, validateTime } from "./validator.js"


export const encapsulateEvents = (eventsArray) => {
  
  let Events = []
  let Event = []

  const isEmpty = (obj) => {
    if(Object.keys(obj).length<0) return true
    return false
  }

  const isCTA = (event) => {
    if( event.Event == "createCTA" ) return true
    return false
  }

  eventsArray.forEach(event => {
    if( isEmpty(Event) ) {
      if( isCTA(event) ) {
        // add event to EventObj
        Event.push(event)
      } else {
        // event after CTA (error?)
        console.log("Error :: non-CTA on empty EventObj")
      }
    } else {
      if( isCTA(event) ) {
        // add EventObj to EventsArray
        Events.push(Event)
        // reset EventObj
        Event=[]
        // add event to EventObj
        Event.push(event)
      } else {
        // add event to EventObj
        Event.push(event)
      }
    }
  });

  return Events

}

export const construeEvents = (EventsArray) => {

  let Events = []

  const construeEvent = (Event) => {

    let QuantizedEvent = {}

    let endTime = new Date(Event[Event.length-1].Timestamp)
    let startTime = new Date(Event[0].Timestamp)
    let location = Event[0].Location

    QuantizedEvent.EventTime = endTime-startTime
    QuantizedEvent.shape = Event[0].Shape
    QuantizedEvent.color = Event[0].Color
    QuantizedEvent.startTime = startTime.toString()
    QuantizedEvent.size = Event[0].Size
    QuantizedEvent.location = location
    QuantizedEvent.endTime = endTime.toString()
    QuantizedEvent.buttonErrorCount = 0
    QuantizedEvent.gazeErrorCount = 0
    QuantizedEvent.buttonErrors = {}
    QuantizedEvent.buttonEvents = 0
    QuantizedEvent.buttonOrder = []
    QuantizedEvent.gazeErrors = {}
    QuantizedEvent.gazeOrder = []
    QuantizedEvent.gazeEvents = 0
    QuantizedEvent.gazeResponseTimes = {}

    Event.forEach(event => {

      let eventLocation = event.Location
      let eventType = event.Event

      if(eventType == "gaze") {
        let gazeErrors = validateLocation(eventLocation, location)
        let e = QuantizedEvent.gazeErrors
        QuantizedEvent.gazeErrors = sumMergeArrayOfObjs([e, gazeErrors])

        let gazeTime = new Date(event.Timestamp)
        let gazeResponseTimes = validateTime(startTime, gazeTime, gazeErrors)
        QuantizedEvent.gazeResponseTimes = gazeResponseTimes

        let gazeEvents = QuantizedEvent.gazeEvents
        QuantizedEvent.gazeEvents = gazeEvents + 1

        let eventOrder = QuantizedEvent.gazeOrder
        eventOrder.push(eventLocation)
        QuantizedEvent.gazeOrder = eventOrder

        let gazeErrorCount = countErrors(gazeErrors)
        let gazeErrCount = QuantizedEvent.gazeErrorCount
        QuantizedEvent.gazeErrorCount = gazeErrCount + gazeErrorCount
      }

      if(eventType == "userButtonPress"){
        let buttonErrors = validateLocation(eventLocation, location)
        let e = QuantizedEvent.buttonErrors
        QuantizedEvent.buttonErrors = sumMergeArrayOfObjs([e, buttonErrors])

        let buttonTime = new Date(event.Timestamp)
        let buttonResponseTimes = validateTime(startTime, buttonTime, buttonErrors)
        QuantizedEvent.buttonResponseTimes = buttonResponseTimes

        let buttonEvents = QuantizedEvent.buttonEvents
        QuantizedEvent.buttonEvents = buttonEvents + 1

        let eventOrder = QuantizedEvent.buttonOrder
        eventOrder.push(eventLocation)
        QuantizedEvent.buttonOrder = eventOrder

        let buttonErrorCount = countErrors(buttonErrors)
        let buttonErrCount = QuantizedEvent.buttonErrorCount
        QuantizedEvent.buttonErrorCount = buttonErrorCount + buttonErrCount

      }

    })

    return QuantizedEvent
  }

  EventsArray.forEach(Event => {

    if(Event.length > 0) Events.push(construeEvent(Event))

  })

  return Events

}

export const uniqueRuns = (QuantizedEvents) => {
  try {
    let uniqueDeviceIds = {}
    let sortedData = {}
  
    QuantizedEvents.forEach(event => {
      let eventID = (event.size.toString()+event.color.toString()+event.shape.toString());
      
      if(uniqueDeviceIds[eventID] === undefined) {
        uniqueDeviceIds[eventID] = eventID

        // new device
        sortedData[eventID] = [event]
      } else {

        // existing device
        let updatedArray = sortedData[eventID]
        updatedArray.push(event)
        sortedData[eventID] = updatedArray
      }
    })
    
    // this.setState({sortedData: sortedData})	
    // console.log(sortedData)
    // return {error: false, message: "ok"}

    return sortedData

  } catch (error) {

    return {error: true, message: error}
  }  
}

export const sortLevelsByPedestal = (LevelsData) => {
  try {
    let uniqueDeviceIds = {}
    let sortedData = {}
  
    LevelsData.forEach(event => {
      let eventID = (event.location);
      
      if(uniqueDeviceIds[eventID] === undefined) {
        uniqueDeviceIds[eventID] = eventID

        // new device
        sortedData[eventID] = [event]
      } else {

        // existing device
        let updatedArray = sortedData[eventID]
        updatedArray.push(event)
        sortedData[eventID] = updatedArray
      }
    })
    
    return sortedData

  } catch (error) {

    return {error: true, message: error}
  }  
}

export const generateRunStats = (LevelsData) => {
  // let totalButtonEventsPerEvent = 0
  // let gazeEventsPerEvent = 0
  // let totalButtonEvents = 0
  // let totalGazeEvents = 0
  // let totalErrors = 0
  // let totalCTA = 0

  // let 

  let Levels = {}
  
  const generateEventsSummary = (level, location) => {

    let metaSummary = {}

    metaSummary.buttonResponseTimeDistrabution = {}
    metaSummary.gazeResponseTimesDistrabution = {}
    metaSummary.buttonErrorDistrabution = {}
    metaSummary.totalButtonResponseTime = 0
    metaSummary.totalErrorButtonPresses = 0
    metaSummary.gazeErrorDistrabution = {}
    metaSummary.totalGazeResponseTime = 0
    metaSummary.totalErrorGazeCount = 0
    metaSummary.totalButtonPresses = 0
    metaSummary.totalGazeCount = 0
    metaSummary.buttonOrder = []
    metaSummary.gazeOrder = []
    metaSummary.totalRuns = 0

    LevelsData[level][location].forEach(EventSummaries => {

      let totalRuns = metaSummary.totalRuns
      metaSummary.totalRuns = totalRuns + 1

      let gazeOrder = metaSummary.gazeOrder
      gazeOrder.push(EventSummaries.gazeOrder)
      metaSummary.gazeOrder = gazeOrder

      let buttonOrder = metaSummary.buttonOrder
      buttonOrder.push(EventSummaries.buttonOrder)
      metaSummary.buttonOrder = buttonOrder

      let totalGazeCount = metaSummary.totalGazeCount
      let gazeCount = EventSummaries.gazeEvents
      metaSummary.totalGazeCount = totalGazeCount + gazeCount

      let totalButtonPresses = metaSummary.totalButtonPresses
      let buttonEvents = EventSummaries.buttonEvents
      metaSummary.totalButtonPresses = totalButtonPresses + buttonEvents

      let totalErrorGazeCount = metaSummary.totalErrorGazeCount
      let errorGazeCount = EventSummaries.gazeErrorCount
      metaSummary.totalErrorGazeCount = totalErrorGazeCount + errorGazeCount

      let totalGazeResponseTime = metaSummary.totalGazeResponseTime
      let gazeResponseTimes = EventSummaries.gazeResponseTimes
      if(Object.keys(gazeResponseTimes).length > 0) metaSummary.totalGazeResponseTime = sumObj(gazeResponseTimes) + totalGazeResponseTime

      let gazeErrorDistrabution = metaSummary.gazeErrorDistrabution
      let gazeErrorDist = EventSummaries.gazeErrors
      metaSummary.gazeErrorDistrabution = sumMergeArrayOfObjs([gazeErrorDistrabution, gazeErrorDist])

      let totalErrorButtonPresses = metaSummary.totalErrorButtonPresses
      let buttonErrors = EventSummaries.buttonErrorCount
      metaSummary.totalErrorButtonPresses = buttonErrors + totalErrorButtonPresses

      let totalButtonResponseTime = metaSummary.totalButtonResponseTime
      let buttonRespTime = EventSummaries.buttonResponseTimes
      if(Object.keys(buttonRespTime).length > 0) metaSummary.totalButtonResponseTime = sumObj(buttonRespTime) + totalButtonResponseTime

      let buttonErrorDistrabution = metaSummary.buttonErrorDistrabution
      let buttonErrorDist = EventSummaries.buttonErrors
      metaSummary.buttonErrorDistrabution = sumMergeArrayOfObjs([buttonErrorDistrabution, buttonErrorDist])

      let gazeResponseTimesDistrabution = metaSummary.gazeResponseTimesDistrabution 
      let gazeResponseTimeDist = EventSummaries.gazeResponseTimes
      metaSummary.gazeResponseTimesDistrabution = sumMergeArrayOfObjs([gazeResponseTimesDistrabution, gazeResponseTimeDist])

      let buttonResponseTimeDistrabution = metaSummary.buttonResponseTimeDistrabution
      let buttonRespTimeDist = EventSummaries.buttonResponseTimes
      metaSummary.buttonResponseTimeDistrabution = sumMergeArrayOfObjs([buttonResponseTimeDistrabution, buttonRespTimeDist])
    })  
  
    return metaSummary
  }

  const generateLocationSummary = (level) => {

    let Location = {}
    // let LocationSummary = {}

    Object.keys(LevelsData[level]).forEach(location => {
      // if(location.length > 0) Location.push(generateEventsSummary(level, location))
      // Location.push(generateEventsSummary(level, location))

      Location[location] = generateEventsSummary(level, location)
    })  

    return Location
  }

  Object.keys(LevelsData).forEach(level => {
    // if(level.length > 0) Levels.push(generateLocationSummary(level))
    // Levels.push(generateLocationSummary(level))
    Levels[level] = generateLocationSummary(level)

  })

  return Levels

}


export const sortLevelData = (levelData) => {
  
  let levels = {}
  
  Object.keys(levelData).forEach(level => {
    let sortedLevels = sortLevelsByPedestal(levelData[level])
    levels[level] = sortedLevels
  })

  return levels

}