
const Query=() => {
    return(
<table className="table col-10" style={{float:"right"}}>
  <thead>
    <tr>
      
      <th>Employee Name</th>
      <th>Subject of Leave</th>
      <th>Leave Duration</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
      {/*use map method here */}
    <tr>
      <th>ABC</th>
      <td>Sickness</td>
      <td>5 days</td>
      <td>Sick since last week.</td>
    </tr>
  </tbody>
</table>
    );
}

export default Query;