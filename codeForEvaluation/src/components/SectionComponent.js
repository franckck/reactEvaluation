import React from 'react';
import { useDispatch } from 'react-redux';
import updateMessage from '../store/actions/messages.actions';
import { useHighlighted } from '../store/reducers';

export default function SectionComponent() {
    const highlighted = useHighlighted();
    const dispatch = useDispatch();

    const acceptCondition = () => {
        dispatch(updateMessage('Section X accepted'));
    }

    return (
        <div style={{backgroundColor: highlighted}}>
            <button onClick={acceptCondition}>I agree</button>
        </div>
    );
}