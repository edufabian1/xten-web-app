import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppNav } from "./components/navbar/appNav";
import { ListArticles } from "./components/article-list/list-articles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ArticlePage } from "./components/article-page/article-page";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNav />
      </div>
      <Switch>
        <Route exact path="/articulos">
          <ListArticles />
        </Route>
        <Route exact path="/articulos/:id" children={<ArticlePage />} />
        <Route exact path="/">
          <ListArticles />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
