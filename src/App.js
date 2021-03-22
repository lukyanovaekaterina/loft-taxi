import React from "react";
import {Map} from './components/Map';
import {Profile} from './components/Profile';
import {Entry} from './components/Entry';
import {Registration} from './components/Registration';
import './App.css';
import {Header} from './components/Header';

const PAGES = {
  map: < Map/>,
  profile: < Profile/>,
  registration: <Registration/>,  
  entry: < Entry/>,

}

class App extends React.Component {

  state = { currentPage: "entry" };

  navigateTo = (page) => {
    this.setState({currentPage: page});
  };

  render() {
  return ( 
  <>
  <Header navigate={this.navigateTo}/>
  <main>
    <section>
      {PAGES[this.state.currentPage]}
    </section>
  </main>
  </>
  ); 
  }
}

export default App;
