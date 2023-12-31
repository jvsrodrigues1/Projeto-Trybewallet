import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    buttonDisabled: true,
  };

  verifyLogin = () => {
    const { email, password } = this.state;
    const passwordLength = 6;
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (emailRegex.test(email) && password.length >= passwordLength) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.verifyLogin();
    });
  };

  handleEmail = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const { handleLogin, history } = this.props;
    handleLogin(email);
    history.push('/carteira');
  };

  render() {
    const { email, password, buttonDisabled } = this.state;
    return (
      <form onSubmit={ this.handleEmail }>
        <h3>Email</h3>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />
        <h3>Senha</h3>
        <input
          name="password"
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ buttonDisabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  handleLogin: PropTypes.string,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
