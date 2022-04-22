import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyleProvider from "./components/style/GlobalStyleProvider";
import Main from "./components/Main/Main";
import SurveyMain from "./components/Survey/SurveyMain";
import Question from "./components/Survey/Question";
import Result from "./components/Survey/Result";

const App = () => {
  return (
    <GlobalStyleProvider>
      <Router basename="/test-survey-generator" forceRefresh={true}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/survey" component={SurveyMain} />
          <Route path="/question" component={Question} />
          <Route path="/Result/:id" component={Result} />
        </Switch>
      </Router>
    </GlobalStyleProvider>
  );
};

export default App;
