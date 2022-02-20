import { useDispatch } from 'react-redux';
import './style.scss';
import { setView } from '../../appSlice';
import Settings from '../settings';

const Home = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Settings />
            <section className={`home`}>
                <h1>Welcome to Code Typing</h1>
                <button type={`button`} onClick={() => dispatch(setView('exercise'))}>Start Typing!</button>
            </section>
        </>
    );
};

export default Home;