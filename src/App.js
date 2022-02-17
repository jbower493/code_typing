import './app.scss';
import Main from './components/main';

const sentence = "The lazy fox jumped over the big brown dog."

const App = () => {
    return (
        <div className="app">
            <Main sentence={sentence} />
        </div>
    );
}

export default App;