import { useSelector } from 'react-redux';
import './app.scss';
import Home from './components/home';
import Exercise from './components/exercise';

const App = () => {
    const view = useSelector(state => state.app.view);

    const renderPage = () => {
        switch (view) {
            case 'exercise': return <Exercise content={content.SENTENCES[Math.floor(Math.random() * 3)]} />;
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

export const encoding = {
    START: '{#{',
    END: '}#}'
};

const content = {
    CODE: `const (${encoding.START}ArrowRight${encoding.END} => (${encoding.START}ArrowRight${encoding.END} => {${encoding.START}ArrowRight${encoding.END};`,
    SENTENCES: [
        'The quick brown fox jumped over the lazy dog.',
        'She sells sea shells on the sea shore.',
        'The best way to remove all the bugs is to remove all the software.'
    ]
};