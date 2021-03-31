import { useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import designs from './designs.reducers'
import messages from './messages.reducers';

const appReducers = combineReducers({
    designs,
    messages
});

export default appReducers;

export const useHighlighted = () =>
    useSelector(state => state.designs.highlighted);

    
export const useAcceptMessage = () =>
    useSelector(state => state.messages.message);