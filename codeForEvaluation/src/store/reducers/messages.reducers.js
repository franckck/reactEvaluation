import * as MessageActions from '../actions/messages.actions'

const initialState = {
    message: ''
}

const messages = (state = initialState, action) => {
    switch(action.type) {
        case MessageActions.MESSAGE_UPDATE_CONTENT:
            return {
                ...state,
                message: action.data
            };
        default:
            return state;
    }
}

export default messages;