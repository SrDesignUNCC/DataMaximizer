import { sumMergeArrayOfObjs } from "./helper.js"
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
  let errors = {
    '12Error': 0,
    '13Error': 0,
    '21 Error': 0,
    '23 Error': 0,
    '31 Error': 0,
    '32 Error': 0
  }
  let totalErrors = 0
  let totalCTA = 0
  let totalGazeEvents = 0
  let gazeEventsPerEvent = 0
  let totalButtonEvents = 0
  let totalButtonEventsPerEvent = 0
}