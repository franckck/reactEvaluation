import * as DesignActions from '../actions/designs.actions';

const initialState = {
    highlighted: false
};

const designs = (state = initialState, action) => {
    switch(action.type){
        case DesignActions.DESIGN_UPDATE_HIGHLIGHTED:
            return {
                ...state,
                highlighted: action.data
            }
            default:
                return state;
    }
}

export default designs;