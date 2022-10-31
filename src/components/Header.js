import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    let total = 0;
    if (expenses.length !== 0) {
      expenses.forEach((expense) => {
        total += Number(expense.value * expense.exchangeRates[expense.currency].ask);
      });
    }
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{total.toFixed(2)}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}
