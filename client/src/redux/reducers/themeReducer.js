import {TYPES} from "../actions/types";

const initialState = false

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.THEME_ACTION:
            return action.payload
        default:
            return state
    }
}

export default themeReducer