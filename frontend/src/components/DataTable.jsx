import "../styles/DataTable.css";

function DataTable({ columns, data }) {
  return (
    <div className="table-wrapper">

      <table>

        <thead>

          <tr>

            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}

          </tr>

        </thead>

        <tbody>

          {data.map((row, rowIndex) => (

            <tr key={rowIndex}>

              {row.map((item, colIndex) => (
                <td key={colIndex}>{item}</td>
              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default DataTable;