
const Reports=() => {
    return(
<table className="table col-10" style={{float:"right"}}>
  <thead>
    <tr>
      
      <th>Employee Name</th>
      <th>Project Title</th>
      <th>Progress in percentage</th>
      <th>Deadline</th>
      <th>Issues (if present)</th>
    </tr>
  </thead>
  <tbody>
      {/*use map method here */}
    <tr>
      <th>ABC</th>
      <td>DEF</td>
      <td>50%</td>
      <td>1st March</td>
      <td>backend connectivity issue</td>
    </tr>
  </tbody>
</table>
    );
}

export default Reports;