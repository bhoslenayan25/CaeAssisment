export const BASE_URL = 'https://rosterbuster.aero'
export const USER_KEY = ''

export const endPoints = {
    GET_ROSTER: '/wp-content/uploads/dummy-response.json',
}

export const requestMethod = {
    GET: 'GET',
    DELETE: 'DELETE',
    HEAD: 'HEAD',
    OPTIONS: 'OPTIONS',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    LINK: 'LINK',
    UNLINK: 'UNLINK'
}

export const errorCodes = {
    REQUEST_TIMEOUT: 1001,
    UNEXPECTED_ERROR: 1002,
    INTERNAL_SERVER_ERROR: 1003,
    NO_INTERNET: 1004,
    NO_DATA_FOUND: 1005,
    ACCESS_TOKEN_FAILURE: 1006,
    REFRESH_TOKEN_FAILURE: 1007,
    INVALID_CREDENTIAL: 1008,
    UNAUTHORISED_ACCESS: 1009
}

export const TIME_OUT = 1000 * 5;