
import React from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Login.css'
import useAuth from './../Home/Context/UseAuth';
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {
    const {googleSignin,setError,setLoading} =useAuth();
    const history =useHistory();
    const location=useLocation();
    const redirect_url=location.state?.from|| "/home";
    const newGoogleSignin=()=>{
      googleSignin()
      .then((result) => {
        history.push(redirect_url)
      }).catch((error) => {
        setError(error.message);
      })
      .finally(()=>setLoading(false))
    }
    return (
        <div>
          <h2 className='logintext'> You have to Login to access the other Benefits </h2>
          <div className="w-25 background-info text-dark align-center login">
           <h3>Already users?</h3>
           <p>Sign is with google then </p>
           <Button variant="success" onClick={newGoogleSignin} >Google Sign in </Button>
          </div>
        </div>
    );
};

export default Login;<h2>This is login page come here to log here </h2>