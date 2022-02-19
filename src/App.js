import './app.scss';
import store from './store/store';
import { Provider } from 'react-redux';
import Settings from './components/settings';
import Exercise from './components/exercise';

const sentence = "The lazy fox jumped over the big brown dog."

const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <Settings />
                
                <Exercise content={sentence} />
            </div>
        </Provider>
    );
}

export default App;