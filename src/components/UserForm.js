/* eslint-disable default-case */
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

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
    nexstep = () => {
        const {step} = this.state;
        this.setState({
            step: step+1
        });
    }

    // proceed to prev step
    prevstep = () => {
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
                        nexstep={this.nexstep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return <h1>FormPersonalDetails</h1>
            case 3:
                return <h1>FormPersonalDetails</h1>
            case 4:
                return <h1>FormPersonalDetails</h1>
            default:
                return <h1>Some error</h1>
        }
    }
}

export default UserForm;
