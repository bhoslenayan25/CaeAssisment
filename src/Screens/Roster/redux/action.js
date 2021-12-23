export const GET_ROSTER = 'GET_ROSTER'
export const SET_ROSTER = 'SET_ROSTER'
export const SET_ERROR = 'SET_ERROR'

export function aGetRoster() {
    return { type: GET_ROSTER }
}

export function aSetRoster(data) {
    return { type: SET_ROSTER, data }
}

export function aSetError(message) {
    return { type: SET_ERROR, message }
}
