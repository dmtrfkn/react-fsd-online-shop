import './styles/index.scss';
import {Theme} from 'app/providers/theme';
import {useTheme} from 'app/providers/theme';
import {AppRouter} from 'app/providers/router';
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={`app ${theme === Theme.DARK && Theme.DARK}`}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;
