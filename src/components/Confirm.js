import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // Process Form here like send it to an api //
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values: {username,firstName,lastName,email,role,bio,address}} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm" />
                    <List>
                        <ListItem 
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem 
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem 
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem 
                            primaryText="User Name"
                            secondaryText={username}
                        />
                        <ListItem 
                            primaryText="Role"
                            secondaryText={role}
                        />
                        <ListItem 
                            primaryText="Address"
                            secondaryText={address}
                        />
                        <ListItem 
                            primaryText="Bio"
                            secondaryText={bio}
                        />
                    </List>
                    <br/>
                    <RaisedButton 
                        label="Confirm & Continue"
                        primary="true"
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Back"
                        primary="false"
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm;
