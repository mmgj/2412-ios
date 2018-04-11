import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import FrontPage from './src/components/FrontPage';
import BackPage from './src/components/BackPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="frontPage"
            component={FrontPage}
            headerMode="none"
            hideNavBar
            initial
            style={{ flex: 1 }}
          />
          <Scene
            key="backPage"
            component={BackPage}
            style={{ flex: 1 }}
          />
        </Stack>
      </Router>
    );
  }
}

export default App;
