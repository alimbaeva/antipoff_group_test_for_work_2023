import React from 'react';
// import { Authentication } from './pages/authentication/Authentication';
import { Main } from './pages/main/Main';
import { Authentication } from './pages/authentication/Authentication';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import './main-style.scss';

function App() {
  const { isAuthUser } = useSelector((state: RootState) => state.user);

  return (
    <div>
      {isAuthUser ? <Main /> : <Authentication />}
      {/* <Main /> */}
      {/* <Authentication /> */}
    </div>
  );
}

export default App;
