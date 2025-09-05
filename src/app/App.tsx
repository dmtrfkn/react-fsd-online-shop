import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Theme } from 'shared/config/theme/themeContext';
import { useTheme } from 'shared/hooks/theme/useTheme';
import { Counter } from 'pages/Counter';
import { Home } from 'pages/Home';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme === Theme.DARK && Theme.DARK}`}>
      <button onClick={toggleTheme}>toogle</button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<Counter />} />
          <Route path={'/'} element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
