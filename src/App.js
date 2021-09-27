import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/home/Home';
import Login from './components/login/Login';
import CommentsList from './components/comments/CommentsList';
import About from './components/aboutus/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/aboutus' component={ About } />
            <Route path='/comments' component={ CommentsList } />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
