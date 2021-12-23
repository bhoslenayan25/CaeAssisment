import axios from 'axios'

import { BASE_URL, TIME_OUT, requestMethod } from './Constants';
import { hideProgressDilaog, log, networkAvailable, showProgressDilaog } from '../Utility';

import { errorCodes } from './Constants';
import { strings } from './errorMessages';

export const serverCall = async (url, method, data = {}) => new Promise(async (resolve, reject) => {
    showProgressDilaog('')

    var headers = {
        'Accept': 'application/json',
    }

    var timeout = TIME_OUT

    let requestObject = {}

    if (method == requestMethod.GET) {
        requestObject = {
            url, method, baseURL: `${BASE_URL}`, timeout, timeoutErrorMessage: strings.request_timeout, responseType: 'json', headers,
        }
    } else {
        requestObject = {
            url, method, baseURL: `${BASE_URL}`, data, timeout, timeoutErrorMessage: strings.request_timeout, responseType: 'json', headers,
        }
    }
    let net = await networkAvailable()

    if (!net) {
        hideProgressDilaog()
        resolve({ success: false, data: {}, errorCode: errorCodes.NO_INTERNET, message: strings.no_internet })
    } else {
        log('serverCall', requestObject)
        axios.request(requestObject)
            .then((response) => {
                log('=-=-=-=-=-=-axios=-=-=-=-', response);
                hideProgressDilaog()
                if (response.status === 200) {
                    resolve({ success: true, data: response.data, message: '' })
                }
            })
            .catch(async (error) => {
                log('API ERROR:-', error.response);
                hideProgressDilaog()
                if (error.response && error.response.status == 404) {
                    resolve({ success: false, errorCode: errorCodes.INVALID_CREDENTIAL, message: (error.response.data.message) ? error.response.data.message : strings.invalid_credential })
                } else if (error.response && error.response.status == 401 && error.response.data && error.response.data.data && error.response.data.data.error && error.response.data.data.error == 'Unauthorised') {
                    resolve({ success: false, errorCode: errorCodes.UNAUTHORISED_ACCESS, message: (error.response.data.message) ? error.response.data.message : strings.unauthorised_accres })
                } else {
                    resolve({ success: false, errorCode: errorCodes.UNEXPECTED_ERROR, message: strings.server_error })
                }
            })
    }
})
