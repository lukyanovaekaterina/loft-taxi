import React from "react";
import { Map } from "./components/Map";
import { Profile } from "./components/Profile";
import { LoginWithConnect } from "./components/Login/Login";
import { Registration } from "./components/Registration/Registration";
import { Header } from "./components/Header";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <Header navigate={this.navigateTo} />
          <main>
            <section>
              <Switch>
                <Route exact path="/" component={LoginWithConnect} />
                <PrivateRoute path="/map" component={Map} />
                <PrivateRoute path="/profile" component={Profile} />
                <Route exact path="/registration" component={Registration} />
              </Switch>
            </section>
          </main>
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
