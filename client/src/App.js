import AllBlog from './views/AllBlog';
import Navbar from './views/NavBar';
import { Router } from '@reach/router';
import OneBlog from './views/OneBlog';
import AddBlog from './views/AddBlog';
import UpdateBlog from './views/UpdateBlog';
import ChatBox from './components/ChatBox'


function App() {
  return (
    <div>
      <Navbar>
        <Router>
          <AllBlog path="/"/>
          <OneBlog path="/blog/:_id"/>
          <AddBlog path="/blog/write"/>
          <UpdateBlog path="/blog/update/:_id"/>
          <ChatBox path="/chat"/>
        </Router>
      </Navbar>
    </div>
  );
}

export default App;