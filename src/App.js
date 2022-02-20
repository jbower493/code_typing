import { useSelector } from 'react-redux';
import './app.scss';
import Home from './components/home';
import Exercise from './components/exercise';

const sentence = "The lazy fox jumped over the big brown dog."

const App = () => {
    const view = useSelector(state => state.app.view);

    const renderPage = () => {
        switch (view) {
            case 'exercise': return <Exercise content={sentence} />;
            case 'home':
            default: return <Home />;
        }
    };

    return (
        <div className="app">
            {renderPage()}
        </div>
    );
}

export default App;