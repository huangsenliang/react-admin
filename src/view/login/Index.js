import React, { Component,Fragment } from 'react';

// 引入局部组件
import LoginForm from "./Login";
import RegisterForm from "./Register";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType:"login",
    };
  };

  switchForm = (value)=>{
    this.setState({
      formType:value
    })
  };
 
  render() {
    return (
      <Fragment>
        {
        this.state.formType==="login"
        ? <LoginForm switchForm={this.switchForm}></LoginForm>
        :<RegisterForm switchForm={this.switchForm}></RegisterForm>
        } 
      </Fragment>
    )
  }
}



export default Login;
