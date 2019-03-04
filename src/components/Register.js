import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import './Register.css';

class Register extends Component {

    onLoginHandle = event => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2>Znany lekarz</h2>
                <div>
                    <Grid container direction='column' justify='center' alignItems='center'>
                        <TextField id='nameInput' label='Name' placeholder='Name' margin='normal' />
                        <TextField id='surnameInput' label='Surname' placeholder='Surname' margin='normal' />
                        <TextField id='emailInput' label='E-mail' placeholder='E-mail' margin='normal' />
                        <TextField id='passwordInput' label='Password' placeholder='Password' margin='normal' type='password' />
                        <TextField id='confirmPasswordInput' label='Confirm password' placeholder='Confirm password' margin='normal' type='password' />
                        <Button id='signInButton' variant='contained' color='default' onClick={this.onLoginHandle}>Sign up</Button>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);
