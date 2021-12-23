import { storageKeys } from "../../../Storage/constants"
import { getData, saveData } from "../../../Storage/DB"
import { serverCall } from "../../../Utilities/API"
import { endPoints, requestMethod } from "../../../Utilities/API/Constants"
import { log, networkAvailable } from "../../../Utilities/Utility"
import { aSetError, aSetRoster } from "./action"
import { validateJSON } from "./validator"


export function getRosterData() {
  return async dispatch => {
    let online = await networkAvailable()
    if (online) {
      let results = await serverCall(endPoints.GET_ROSTER, requestMethod.GET)
      if (results.success) {
        let data = results.data
        if (validateJSON(data)) {
          data.sort((a, b) => Date(a.Date) < Date(b.Date))
          data.reverse();
          dispatch(aSetRoster(data))
          saveData(storageKeys.ROSTER_DATA, data)
        }else{
          log('validateJSON','not valid')
          dispatch(aSetError('Sorry, maintainance activity is running, try after sometime'))
        }
      } else {
        let data = await getData(storageKeys.ROSTER_DATA)
        log('============',data)
        if (data != null) {
          dispatch(aSetRoster(JSON.parse(data)))
        } else {
          dispatch(aSetError(results.message))
        }
      }
    } else {
      let data = await getData(storageKeys.ROSTER_DATA)
      log('============',data)
      if (data != null) {
        dispatch(aSetRoster(JSON.parse(data)))
      } else {
        dispatch(aSetError('No Internet'))
      }
    }
  }
}