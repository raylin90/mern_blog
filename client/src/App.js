import AllBlog from './views/AllBlog';
import Navbar from './components/NavBar';
import { Router } from '@reach/router';
import OneBlog from './views/OneBlog';

function App() {
  return (
    <div>
      <Navbar>
        <Router>
          <AllBlog path="/home"/>
          <OneBlog path="/blog/:_id"/>
        </Router>
      </Navbar>
    </div>
  );
}

export default App;