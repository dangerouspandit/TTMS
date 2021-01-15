
import react from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import logo from './LOGO_timesheet.png';



function Login()
{
    return(
        <>
        <center >
         <h4 style={{color:'#e75480'}}>Welcome</h4>
         <h2>TTMS Application</h2>
         <h2 className="text-capitalize" style={{color:'blue'}}>(time tracking management system)</h2>
            <div className="heading"><h3><b>User Login</b></h3></div>
        <div className="login flex-container" >
            
            <img className="footer-img" src={logo} alt="logo"/>
            
        <form>
  <div className="form-group row Email">
    <label for="staticEmail" className="col-sm-2 col-form-label flex-container"><i className="fa fa fa-user" aria-hidden="true"></i>UserId</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="staticEmail" placeholder="UserId/Email"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword" className="col-sm-2 col-form-label flex-container" ><i class="fa fa-lock" aria-hidden="true"></i>
Password &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label Forget-password" for="exampleCheck1">Forget Password</label>
  </div>
  <button type="signin" class="btn btn-primary">Login</button>
</form>

        </div>
        </center>
        <footer className="footer">
        
         <h1 className="text-center">Powered by::Cospectral Solution</h1>
         <marquee>
         <div className="flex-container">
         <img src={logo} alt="logo" className="footer-image"/>
         <div>
             <p style={{color:'blue'}}>
             16/1338,Sector 16,Indira Nagar,Lucknow - 226016
              </p>
              <p style={{color:'blue'}}>
               Ph No +919855450355, +12248298109, Mail - anujyour@gmail.com
               </p>
               <p style={{color:'blue'}}>
              website:- cospectral.com
             </p>
         </div>
         </div>
         </marquee>
          </footer>
        </>
    );
}
export default Login;