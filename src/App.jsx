import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const Home = () => <h1>Welcome</h1>;

const NumberDisplay = ({ match }) => <h1>{match.params.number}</h1>;

const WordDisplay = ({ match }) => {
  const word = match.params.word;
  const color = match.params.color;
  const backgroundColor = match.params.backgroundColor;

  const isValidColor = (color) => {
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return regex.test(color);
  };

  const colorStyle = isValidColor(color) ? { color } : {};
  const backgroundColorStyle = isValidColor(backgroundColor) ? { backgroundColor } : {};

  return (
    <h1 style={{ ...colorStyle, ...backgroundColorStyle }}>{word}</h1>
  );
};

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/:number(\d+)" component={NumberDisplay} />
      <Route path="/:word?" component={WordDisplay} />
      <Route path="/:word?/:color?/:backgroundColor?" component={WordDisplay} />
    </Switch>
  </Router>
);

export default App;