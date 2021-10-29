import AllBlog from './views/AllBlog';
import Navbar from './views/NavBar';
import { Router } from '@reach/router';
import OneBlog from './views/OneBlog';
import AddBlog from './views/AddBlog';
import UpdateBlog from './views/UpdateBlog';
import ChatBox from './components/ChatBox'
import Login from './views/Login';
import Register from './views/Register';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authCreators } from './states/types'
import About from './views/About';

function App() {

  const dispatch = useDispatch()
  const { authUserLoggedIn } = bindActionCreators(authCreators, dispatch)

  useEffect(() => {
    authUserLoggedIn();
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Navbar>
        <Router>
          <AllBlog path="/"/>
          <OneBlog path="/blog/:_id"/>
          <AddBlog path="/blog/write"/>
          <UpdateBlog path="/blog/update/:_id"/>
          <ChatBox path="/chat"/>
          <About path="/about"/>

          <Login path="/login"/>
          <Register path="register"/>
        </Router>
      </Navbar>
    </div>
  );
}

export default App;