import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import './Login.css';

class Login extends Component {

    onRegisterHandle = event => {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div>
                <h2>Sign in</h2>
                <div className="Login">
                    <Grid container direction='column' justify='center' alignItems='center'>
                        <TextField id='loginInput' label='E-mail' placeholder='E-mail' margin='normal' />
                        <TextField id='passwordInput' label='Password' placeholder='Password' margin='normal' type='password' />
                        <Grid>
                            <Button id='logInButton' style={{marginRight: '20px'}} variant='contained' color='primary'>Log in</Button>
                            <Button id='registerButton' variant='contained' color='default' onClick={this.onRegisterHandle}>Sign up</Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
