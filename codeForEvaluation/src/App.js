import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import SectionComponent from './components/SectionComponent';
import { AppComponent } from './components/AppComponent';

function App() {

  return (
    <Provider store={store}>
      <AppComponent />
      <SectionComponent />
    </Provider>
  );
}

export default App;
