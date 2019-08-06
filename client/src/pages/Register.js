import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Col, Row, Container } from "../components/Grid";
import UserForm from "../components/UserForm";
import axios from 'axios'
import PageWrapper from "../components/PageWrapper";


class Register extends Component {
  state = {
      email: "",
      password: "",
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const {email,password} = this.state
       axios.post("/api/login", {email, password})
          .then(result => {
            console.log(result.data)
           
          })
  }

  render() {
      return (
        <PageWrapper>
          <div className="register-form">
            <UserForm 
                title="Sign up"
                handleFormSubmit={this.handleFormSubmit}
                handleChange={this.handleChange}
            />
        </div>
        </PageWrapper>
      );
  }
}
export default Register;