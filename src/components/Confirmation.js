import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirmation extends Component {

    render() {
        const { values: { name, age, email, address } } = this.props;
        const { theme  } = this.props;
        return (
            <MuiThemeProvider muiTheme={theme}>
                <AppBar
                    title="Confirmation"
                    className="text-center"
                    showMenuIconButton={false}
                />
                <div className="text-center">
                    <List>
                        <ListItem
                            primaryText="Name"
                            secondaryText={name}
                        />
                        <ListItem
                            primaryText="Age"
                            secondaryText={age}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Address"
                            secondaryText={address}
                        />
                    </List>
                    <RaisedButton
                        label="Back"
                        secondary={true}
                        onClick={this.props.prevStep}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Confirmation
