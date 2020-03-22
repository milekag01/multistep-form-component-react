import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends Component {
    render() {
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Details Saved</h1>
                    <p>Wait for the Admin to authorise you</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success;
