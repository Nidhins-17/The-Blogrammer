// JSX is returns in the function


import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import Blogdetails from './BlogDetails';
import Notfound from './Notfound';

function App() {


  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Home/>
            </Route>
            <Route exact path = "/create">
              <Create/>
            </Route>
            <Route exact path = "/blogs/:id">
              <Blogdetails/>
            </Route>
            {/* if it catches any other route then the following page will be displayed */}
            <Route exact path = "*">
              <Notfound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

// to use in the other files
export default App;


  