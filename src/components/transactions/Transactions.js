import React from 'react';
import PropTypes from 'prop-types';
import './Transactions.css';

export const TransactionHistory = ({ items }) => {
  const tableItem = items.map(({ type, id, amount, currency }) => {
    return (
      <tr className="transaction-history__row" key={id}>
        <td className="transaction-history__first-col">{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });

  return (
    <table className="transaction-history">
      <thead className="transaction-history__header">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{tableItem}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
