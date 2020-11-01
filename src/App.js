import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './Pages/Home/Home';
import Stack from './Pages/Stack/Stack';
import Queue from './Pages/Queue/Queue';
import LinkedListData from './Pages/LinkedList/LinkedListData';
import ArrayStructureData from "./Pages/Array/ArrayStructureData"
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/stack">
            <Stack />
          </Route>
          <Route exact path="/linkedList">
            <LinkedListData />
          </Route>
          <Route exact path="/array">
            <ArrayStructureData />
          </Route>
          <Route exact path="/queue">
            <Queue />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
