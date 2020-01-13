import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


import { signOut } from '../../redux/Session';
import { firebaseObj } from '../../firebase';
import * as ROUTES from '../../constants/routes';


class HomeBase extends React.Component {

  handleSignOut = () => {
      this.props.signOut();
  };

  render() {
    const { isSigningOut } = this.props;

    return (
      <div>
        <h1>Protected route</h1>
        <button onClick={this.handleSignOut}>SignOut</button>
        {isSigningOut && <p>Signing Out....</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        isSigningOut: state.session.isSigningOut,
        user: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return{
        signOut: () => dispatch(signOut())
    };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeBase);

export { Home };
  