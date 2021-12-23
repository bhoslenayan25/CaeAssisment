// var schima = [
//     {
//         "Flightnr": "MX78",
//         "Date": "06/05/2020",
//         "Aircraft Type": "748-800E",
//         "Tail": "9878",
//         "Departure": "AMS",
//         "Destination": "ALC",
//         "Time_Depart": "11:35",
//         "Time_Arrive": "14:15",
//         "DutyID": "FLT",
//         "DutyCode": "FLIGHT",
//         "Captain": "Richard Versluis",
//         "First Officer": "Jeroen Derwort",
//         "Flight Attendant": "Lucy Stone"
//     }
// ]

const Ajv = require("ajv")

const schema = {
  type: "object",
  properties: {
    foo: { type: "integer" },
    bar: { type: "string" },

    "Flightnr": { type: "string" },
    "Date": { type: "string" },
    "Aircraft Type": { type: "string" },
    "Tail": { type: "string" },
    "Departure": { type: "string" },
    "Destination": { type: "string" },
    "Time_Depart": { type: "string" },
    "Time_Arrive": { type: "string" },
    "DutyID": { type: "string" },
    "DutyCode": { type: "string" },
    "Captain": { type: "string" },
    "First Officer": { type: "string" },
    "Flight Attendant": { type: "string" }

  },
  required: ["Flightnr", "Date", "Aircraft Type", "Tail", "Departure", "Destination", "Time_Depart", "DutyID", "DutyCode", "Captain", "First Officer", "Flight Attendant"],
  additionalProperties: false,
}

const ajv = new Ajv()
const validate = ajv.compile(schema)
export const validateJSON = (data) => {
  let valid = true
  for (let i = 0; i < data.length; i++) {
    if (!validate(data[i])) {
      valid = false
      break
    }
  }
  return true
}
