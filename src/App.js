import React from 'react';
import { Provider } from 'react-redux';
import TeamSelected from './containers/Team';
import { store } from './helpers';

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Socorro FC</h1>
      <TeamSelected />
    </main>
  </Provider>
);

export default App;
