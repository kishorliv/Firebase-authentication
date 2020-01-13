import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signIn } from '../../redux/Session';
import * as ROUTES from '../../constants/routes';
import './style.css';
import avatar from '../../assets/images/avatar.png';


class SignInBase extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    };
    
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    };
    
    onSubmit = (e) => {
        const { email, password } = this.state;
        console.log('Submitting...');
        this.props.signIn(email, password);
        e.preventDefault();
    };

    render(){
        const { isSigningIn, isAuthenticated, error } = this.props;

        if(isAuthenticated){
            return <Redirect to = {ROUTES.HOME} />
        }
        else{
            return(
                <div>
                <div className="container-error">
                    {(Object.entries(error).length !== 0) && <p className="errorMsg">{error.message}</p>}    
                    {isSigningIn && <p className="errorMsg">Signing in....</p>}
                </div>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <div className="imgcontainer">
                            <img src={avatar} alt="Avatar" className="avatar" />
                        </div>
    
                        <div className="container">
                            <label htmlFor="Email"><b>Email</b></label>
                            <input type="email" placeholder="Email" name="uname" onChange={this.handleEmailChange} required />
    
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Password" name="psw" onChange={this.handlePasswordChange} required />
                                
                            <button>SignIn</button>
                        </div>
                    </form>
                </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
      isSigningIn: state.session.isSigningIn,
      error: state.session.error,
      isAuthenticated: state.session.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return{
        signIn: (email, password) => dispatch(signIn(email, password))
    };
};

const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInBase);

export { SignIn };
  