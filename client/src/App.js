import AllBlog from './views/AllBlog';
import Navbar from './views/NavBar';
import { Router } from '@reach/router';
import OneBlog from './views/OneBlog';
import AddBlog from './views/AddBlog';

function App() {
  return (
    <div>
      <Navbar>
        <Router>
          <AllBlog path="/home"/>
          <OneBlog path="/blog/:_id"/>
          <AddBlog path="/blog/write" />
        </Router>
      </Navbar>
    </div>
  );
}

export default App;