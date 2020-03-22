/* eslint-disable default-case */
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
class UserForm extends Component {
    state= {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        bio:'',
        address:'',
        step: 1
    }
    // proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step+1
        });
    }

    // proceed to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step-1
        });
    }

    //handle field change
    handleChange= input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    render() {
        const {step} = this.state;
        const {username,firstName,lastName,email,role,bio,address}=this.state;
        const values = {username,firstName,lastName,email,role,bio,address};
        
        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Success />
                )
            default:
                return <h1>Some error</h1>
        }
    }
}

export default UserForm;
