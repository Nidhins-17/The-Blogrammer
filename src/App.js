// JSX is returns in the function


import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

// to use in the other files
export default App;


