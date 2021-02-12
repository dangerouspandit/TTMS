
const Details=() => {
    return(
<table className="table col-10" style={{float:"right"}}>
  <thead>
    <tr>
      
      <th>Employee Name</th>
      <th>Project Name</th>
      <th>Work Duration</th>
      <th>Work Rating</th>
      <th>Attendence Percentage</th>
    </tr>
  </thead>
  <tbody>
      {/*use map method here */}
    <tr>
      <th>ABC</th>
      <td>DEF</td>
      <td>5 days</td>
      <td>2/5</td>
      <td>100%</td>
    </tr>
  </tbody>
</table>
    );
}

export default Details;