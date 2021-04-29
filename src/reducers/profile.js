import {SAVE_CARD} from "../actions";

const initialState = {
    isProfileFilled: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_CARD: {
            return {
                ...state,
                isProfileFilled: true
            }
        }
        default:
            return state;
    }
}