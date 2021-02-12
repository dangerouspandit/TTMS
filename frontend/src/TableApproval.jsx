import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const TableApproval=() => {
    const[flag,setFlag]=useState(false);

    return(
      <div className="container col">
        <div className="row col-10" style={{float:"right"}}>
            <table className="table" >
  <thead>
    <tr>
      <th >Emp ID</th>
      <th >Employee Name</th>
      <th >Projects Name</th>
      <th >Work Duration</th>
    </tr>
  </thead>
  <tbody>
      {/*use map method here */}
    <tr>
      <th>1</th>
      <td>Mark</td>
      <td>TTMS</td>
      <td>5 hrs</td>
    </tr>
  </tbody>
</table>
</div>
                       
<div className="row" >
<label for="emp">Select employee Id:-</label>

<select name="emp">
  <option >-</option>
  <option >1</option>
  <option >2</option>
  <option >3</option>
</select>
  </div>            
<div className="row" style={{float:"right"}}>
{flag? <div> <input placeholder="Add description"/><button type="submit">Submit</button> </div> : null}
          <button>Accept</button>
            <button onClick={()=> {setFlag(true)}}>Reject</button>
            </div>
       </div> 
    );
    }

export default TableApproval;

