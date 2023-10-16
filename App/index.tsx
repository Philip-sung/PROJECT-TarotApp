//External Imports
import React from 'react';
import { RecoilRoot } from 'recoil';

//Local Imports
import { Routes } from './navigation';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  );
}

export default App;
