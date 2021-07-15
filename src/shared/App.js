import './App.css';
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "../components";
import {TrailList, TrailWrite, TrailDetail, TrailEdit } from "../pages";
import { history } from "../redux/configureStore";
function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={TrailList}/>
        <Route path="/write" exact component={TrailWrite} />
        <Route path="/trail/:idx" exact component={TrailDetail}/>
        <Route path="/edittrail/:idx" exact component={TrailEdit}/>
        </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
