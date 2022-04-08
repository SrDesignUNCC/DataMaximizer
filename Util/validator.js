
export const validateLocation = (eventLocation, EventLocation) => {

  let errors = {
    '12Error': 0,
    '13Error': 0,
    '21Error': 0,
    '23Error': 0,
    '31Error': 0,
    '32Error': 0,
    'none': 0
  }

  // Pedistol 1
  if(EventLocation == " pedistol 1") {
    if(eventLocation == " pedistol 1") errors["none"] = 1
    if(eventLocation == " pedistol 2") errors["12Error"] = 1
    if(eventLocation == " pedistol 3") errors["13Error"] = 1
  }

  // Pedistol 2
  if(EventLocation == " pedistol 2") {
    if(eventLocation == " pedistol 1") errors["21Error"] = 1
    if(eventLocation == " pedistol 2") errors["none"] = 1
    if(eventLocation == " pedistol 3") errors["23Error"] = 1
  }

  // Pedistol 3
  if(EventLocation == " pedistol 3") {
    if(eventLocation == " pedistol 1") errors["31Error"] = 1
    if(eventLocation == " pedistol 2") errors["32Error"] = 1
    if(eventLocation == " pedistol 3") errors["none"] = 1
  }

  return (errors)

}

export const validateTime = (startTime, eventTime, errors) => {
  let responseTimeMS = eventTime-startTime

  let err = {...errors}

  Object.keys(err).forEach(er => {
    let val = err[er]
    err[er] = (val * responseTimeMS)
  })

  return err

}