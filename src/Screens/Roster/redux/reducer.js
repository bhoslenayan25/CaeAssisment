import { log } from '../../../Utilities/Utility';
import { GET_ROSTER, SET_ROSTER,SET_ERROR } from './action';

const initialState = {
    rosterList: [],
    loading: false,
    error: false,
    errorMessage: ''

}

function rosterReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ROSTER:
            return {
                ...state, loading: true, error: false,errorMessage: ''
            }

        case SET_ROSTER:
            log('reducer',action)
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: '',
                rosterList: action.data
            }

        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                rosterList:[],
                errorMessage: action.message
            }
        default:
            return state;
    }
}

export default rosterReducer;