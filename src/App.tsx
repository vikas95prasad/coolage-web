import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuPage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route path="/" exact component={MenuPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
