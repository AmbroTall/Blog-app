import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import SingleBlogPage from "./components/pages/SingleBlogPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Write from "./components/pages/Write";
import Settings from "./components/pages/Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/write">
              <Write />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/blogdetail">
              <SingleBlogPage />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
