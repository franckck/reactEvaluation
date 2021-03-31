import { useDispatch } from 'react-redux';
import { updateHighlighted } from '../store/actions/designs.actions';
import { useAcceptMessage } from '../store/reducers';

export function AppComponent () {
  const dispatch = useDispatch();
  const message = useAcceptMessage();
  const changeColor = (color) => {
    dispatch(updateHighlighted(color));
  }

    return (
        <div className="App">
        {message}
        <button onClick={() => changeColor('red')}>Red color</button>
        <button onClick={() => changeColor('green')}>Green color</button>
        </div>
    )
}