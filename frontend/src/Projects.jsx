
const Projects=() => {
    return(
<table className="table col-10" style={{float:"right"}}>
  <thead>
    <tr>
      
      <th>Project Title</th>
      <th>Duration of Project</th>
      <th>Progress in Percentage</th>
      <th>Deadline</th>
    </tr>
  </thead>
  <tbody>
      {/*use map method here */}
    <tr>
      <th>ABC</th>
      <td>10 WH</td>
      <td>50%</td>
      <td>1st March</td>
    </tr>
  </tbody>
</table>
    );
}

export default Projects;