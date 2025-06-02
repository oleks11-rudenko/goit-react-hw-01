import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.container}>
      <thead className={css.tableHeader}>
        <tr className={css.tableHeaderList}>
          <th className={css.tableItem}>Type</th>
          <th className={css.tableItem}>Amount</th>
          <th className={css.tableItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map((item) => {
          return (
            <tr key={item.id} className={css.transaction}>
              <td
                className={css.tableItem}
              >{`${item.type[0].toUpperCase()}${item.type.slice(
                1,
                item.type.length,
              )}`}</td>
              <td className={css.tableItem}>{item.amount}</td>
              <td className={css.tableItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
