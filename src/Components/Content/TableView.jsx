const TableView = ({ total, higa, bintlebon }) => {
  if (total > 169) {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">العدد</th>
            <th scope="col">حقة</th>
            <th scope="col">الحـــــــالة</th>
            <th scope="col">بنت لبون</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{total}</th>
            <td>{Math.floor(total / 50)}</td>
            <td>او</td>
            <td>{Math.floor(total / 40)}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
};

export default TableView;
