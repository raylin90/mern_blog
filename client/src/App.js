import AllBlog from './views/AllBlog';
import Navbar from './components/NavBar';
import { Router } from '@reach/router';

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <AllBlog path="/home"/>
      </Router>
    </div>
  );
}

export default App;