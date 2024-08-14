import React from "react";
import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr className={css.headList}>
          <th className= {css.headName}>Type</th>
          <th className= {css.headName}>Amount</th>
          <th className= {css.headName}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.bodyList} key={id}>
            <td className= {css.bodyName}>{type}</td>
            <td className= {css.bodyName}>{amount}</td>
            <td className= {css.bodyName}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory