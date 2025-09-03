import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { HomeLazy } from './components/Home.lazy';
import { CounterLazy } from './components/Counter.lazy';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Theme } from './theme/themeContext';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme === Theme.DARK && Theme.DARK}`}>
      <button onClick={toggleTheme}>toogle</button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<CounterLazy />} />
          <Route path={'/'} element={<HomeLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
