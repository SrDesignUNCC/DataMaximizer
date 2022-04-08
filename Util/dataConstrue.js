import { countErrors, sumMergeArrayOfObjs } from "./helper.js"
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

export const generateRunStats = (QuantizedEvents) => {
  let totalErrors = 0
  let totalCTA = 0
  let totalGazeEvents = 0
  let gazeEventsPerEvent = 0
  let totalButtonEvents = 0
  let totalButtonEventsPerEvent = 0
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