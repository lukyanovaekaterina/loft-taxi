import React from "react";
import {Map} from './components/Map';
import {ProfileWithAuth} from './components/Profile';
import {LoginWithAuth} from './components/Login';
import {Registration} from './components/Registration';
import {Header} from './components/Header';
import { withAuth } from "./components/AuthContext";
import PropTypes from 'prop-types';
import './App.css';

const PAGES = {
  map: (props) => < Map {...props} />,
  profile: (props) => < ProfileWithAuth {...props} />,
  registration: (props) => <Registration {...props} />,  
  login: (props) => <LoginWithAuth {...props} />,

}

class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn ){
    this.setState({currentPage: page});
  } else {
    this.setState({ currentPage: "login" });
  }
};

  render() {
  return ( 
  <>
  <div>
  <Header navigate={this.navigateTo}/>
  <main>
    <section>
      {PAGES[this.state.currentPage]({ navigate: this.navigateTo })}
    </section>
  </main>
  </div>
  </>
  ); 
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default withAuth(App);
