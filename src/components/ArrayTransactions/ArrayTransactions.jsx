import '../ArrayTransactions/arrayTransactions.css';
import iconWrite from '../../assets/icons/write-icon-solid.jpg';

/**
 * ArrayTransactions component
 * @returns {JSX.Element} ArrayTransactions component
 */
export default function ArrayTransactions() {
  const [rows, setRows] = useState([
    {
      id: 1,
      col1: 'June 20th,2023',
      col2: 'Virgin Megastore',
      col3: '$45',
      col4: '$2000',
      isCollapsed: true
    },
    {
      id: 2,
      col1: 'June 21th,2023',
      col2: 'Virgin Megastore',
      col3: '$35',
      col4: '$1995',
      isCollapsed: true
    },
    {
      id: 3,
      col1: 'June 22th,2023',
      col2: 'Virgin Megastore',
      col3: '$1000',
      col4: '$995',
      isCollapsed: true
    },
    {
      id: 4,
      col1: 'June 23th,2023',
      col2: 'Virgin Megastore',
      col3: '$145',
      col4: '$800',
      isCollapsed: true
    }
  ]);

  /**
   * Function to toggle the display state of a transaction row.
   * @param {number} id - The ID of the transaction row.
   */
  const toggleRow = (id) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, isCollapsed: !row.isCollapsed } : row
    );
    setRows(updatedRows);
  };

  return (
    <table className='container-table'>
      <div className='container-title-transactionLines'>
        <thead>
          <tr>
            <th className='titleColumn'>DATE</th>
            <th className='titleColumn'>DESCRIPTION</th>
            <th className='titleColumn'>AMOUNT</th>
            <th className='titleColumn'>BALANCE</th>
          </tr>
        </thead>
      </div>

      <div className='container-transactionLines'>
        <tbody>
          {rows.map((row) => (
            <React.Fragment key={row.id}>
              <tr onClick={() => toggleRow(row.id)}>
                <td className='transactionLine'>{row.col1}</td>
                <td className='transactionLine'>{row.col2}</td>
                <td className='transactionLine'>{row.col3}</td>
                <td className='transactionLine'>{row.col4}</td>
              </tr>
              {!row.isCollapsed && (
                <tr className='container-collapse'>
                  <td colSpan='4'>Transaction Type : Electronic {row.id}</td>
                  <td colSpan='4' className='modification-transactions'>
                    Category : Food
                    <div className='icon-write'>
                      <img src={iconWrite} alt='Modify category' />
                    </div>
                  </td>
                  <td colSpan='4' className='modification-transactions'>
                    Notes:
                    <div className='icon-write'>
                      <img src={iconWrite} alt='Modify notes' />
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </div>
    </table>
  );
}
