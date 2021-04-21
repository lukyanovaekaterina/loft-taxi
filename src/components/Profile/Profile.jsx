import React, { Component } from "react";
import {connect} from "react-redux";
import {logOut} from "../../actions";
import {ProfileForm} from './ProfileForm';


export class Profile extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

 render() {
  return (
    <ProfileForm />
  );
} 
}
export default connect(
  null,
  { logOut }
)(Profile);