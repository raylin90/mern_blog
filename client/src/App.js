import AllBlog from './views/AllBlog';
import Navbar from './views/NavBar';
import { Router } from '@reach/router';
import OneBlog from './views/OneBlog';
import AddBlog from './views/AddBlog';
import UpdateBlog from './views/UpdateBlog';
import EnterChat from './views/EnterChat'
import Login from './views/Login';
import Register from './views/Register';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authCreators } from './states/types'
import About from './views/About';
import ChatBox from './components/ChatBox';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

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


          {/* <EnterChat path="/chat"/> */}

          <Chat path="/chat/:name/:room" />
          <Join path="/joinchat"/>


          <ChatBox path="/chatroom/:user"/>
          <About path="/about"/>

          <Login path="/login"/>
          <Register path="register"/>
        </Router>
      </Navbar>
    </div>
  );
}

export default App;