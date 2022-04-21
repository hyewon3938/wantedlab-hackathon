import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import GlobalStyleProvider from "./components/style/GlobalStyleProvider";

const App = () => {
  return (
    <GlobalStyleProvider>
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </main>
      </Router>
    </GlobalStyleProvider>
  );
};

export default App;
