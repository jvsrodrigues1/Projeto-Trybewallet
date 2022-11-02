import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { eraseExpense, idEdit } from '../redux/actions';

// referencia uuid https://www.geeksforgeeks.org/how-to-create-an-unique-id-in-reactjs/ //

class Table extends Component {
  handleDeleteBtn = (id) => {
    const { expenses, deleteExpense } = this.props;
    const newExpensesArray = expenses.filter((expense) => expense.id !== id);
    deleteExpense(newExpensesArray);
  };

  handleEditBtn = (id) => {
    const { editingId } = this.props;
    editingId(id);
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        <tbody>
    