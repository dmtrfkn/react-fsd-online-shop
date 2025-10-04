import './styles/index.scss';
import { Link } from 'react-router-dom';
import { Theme } from 'app/providers/theme';
import { useTheme } from 'app/providers/theme';
import { AppRouter } from 'app/providers/router';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme === Theme.DARK && Theme.DARK}`}>
      <button onClick={toggleTheme}>toogle</button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <AppRouter  />
    </div>
  );
};

export default App;
