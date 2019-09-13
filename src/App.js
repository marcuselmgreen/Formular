import React, { Component } from 'react';
import * as Colors from 'material-ui/styles/colors';
import './App.css';
import './output.css'
import Confirmation from './components/Confirmation'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const theme = getMuiTheme({
  palette:{
    primary1Color: Colors.indigo900,
    primary2Color: Colors.indigo300,
    accent1Color: Colors.red800
  }
});

export class App extends Component {
  //Objekt med properties
  state = {
    currentstep: 1,
    name: '',
    age: null,
    email: '',
    address: ''
  }

  handleChange = this.handleChange.bind(this);
  nextStep = this.nextStep.bind(this);
  prevStep = this.prevStep.bind(this);
  
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  nextStep() {
    this.setState({
      currentstep: this.state.currentstep + 1
    });
  }

  prevStep() {
    this.setState({
      currentstep: this.state.currentstep - 1
    });
  }

  render() {
    // Laver referencer til alle attributter i state objektet
    const { name, age, email, address } = this.state;
    // Laver et objekt med disse attributter
    const values = { name, age, email, address }
    switch (this.state.currentstep) {
      case 1:
      return (
        <MuiThemeProvider muiTheme={theme}>
          <React.Fragment>
            <AppBar
              title="Form"
              className="text-center"
              showMenuIconButton={false}
            />
            <div className="text-center">
              <TextField
                hintText="Enter your name"
                floatingLabelText="Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <br />
              <TextField
                hintText="Enter your age"
                floatingLabelText="Age"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
              />
              <br />
              <TextField
                hintText="Enter your email"
                floatingLabelText="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <br />
              <TextField
                hintText="Enter your address"
                floatingLabelText="Address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <RaisedButton
                label="Next"
                primary={true}
                onClick={this.nextStep}
              />
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      );
      case 2:
        return (
          <Confirmation
            prevStep={this.prevStep}
            values={values}
            theme={theme}
          />
        );
      default:
        return <h1>Default</h1>
    }
  }
}

export default App;
