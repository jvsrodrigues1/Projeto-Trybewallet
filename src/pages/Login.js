import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { inputEmail } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disableButton: true,
    };
  }

  handleChange = (event) => {
    this.setState(
      { [event.target.name]: event.target.value },
      this.handleValidation,
    );
  };

  handleValidation = () => {
    const { email, password } = this.state;
    const verificationRegex = /\S+@\S+\.\S+/;
    const minLength = 6;
    if (verificationRegex.test(email) && password.length >= minLength) {
      this.setState({ disableButton: false });
    } else {
      this.setState({ disableButton: true });
    }
  };

  handleClick = () => {
    const { history } = this.props;
    history.push('/carteira');
  };

  render() {
    const { email, password, disableButton } = this.state;
    return (
      <div>
        <div className="loginX">
          <h3>Login</h3>
          <input
            data-testid="email-input"
            id="email"
            type="email"
            name="email"
            value={ email }
            placeholder="Email"
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            id="password"
            type="password"
            value={ password }
            placeholder="Senha"
            name="password"
            onChange={ this.handleChange }
          />
          <button
            id="submit"
            type="button"
            onClick={ this.handleClick }
            disabled={ disableButton }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    sendData: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendData: (values) => dispatch(inputEmail(values)),
});

export default connect(null, mapDispatchToProps)(Login);
