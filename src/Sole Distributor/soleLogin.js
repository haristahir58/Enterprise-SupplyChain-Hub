import React from 'react'
import {useState} from 'react'
import { Link, NavLink,useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";
import TopBar from "../pages/TopBar";
import Footer from "../pages/Footer";
import SoleLoginImg from '../Images/SoleLogin.png';
import '../App.css';

export default function SoleLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSoleDistributor= async (e)=>{
    e.preventDefault();
    
    const res = await fetch("/soleDistributor/signin",{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
       email:email,  password:password
      })
      
    });

    const data = res.json();
    if(res.status===400 || !data){
      window.alert("Invalid Credentials")
    }
    else{
      window.alert("Login Successfull")
      navigate("/soleDistributor");
    }

  }



  return (
    <>
    {/* <!-- Topbar Start --> */}
    <div className="container-fluid bg-dark">
          <TopBar />
        </div>
        {/* <!-- Topbar End -->} */}

        {/* <!-- Navbar Starts--> */}
        <div className="container-fluid p-0">
          <Navbar />
        </div>
        {/* <!-- Navbar Ends --> */}


        
        {/* <!-- Header Starts-->} */}

        <div className="jumbotron jumbotron-fluid mb-5">
          <div className="container text-center py-5">
            <h1 className="text-white display-3">Sole Distributor Login</h1>
            <div className="d-inline-flex align-items-center text-white">
              <p className="m-0">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </p>
              <i className="fa fa-circle px-3"></i>
              <p className="m-0">Sole Distributor Login</p>
            </div>
          </div>
        </div>

        {/* <!-- Header Ends-->} */}


        <div className="container">
            <div className="row">
        <div class="col-lg-7"><h6 class="text-primary text-uppercase font-weight-bold">Login As Company's Sole Distributor</h6>
        <h1 class="mb-4">Get Login and Stay Connected with your Dashboard</h1>
        </div>
        </div>
        </div>



                {/* <!-- Sole Distributor's Login Start --> */}

                <section className='signin'>
        <div className='container mt-6'>
            <div className="signin-content">
            <div className="signin-image">
                    <figure>
                        <img src={SoleLoginImg} alt="registration Pic" />
                    </figure>
                
                </div>
                <div className="signin-form">
                    <h2 className='form-title'>Login</h2>
                    <form method='POST' className='register-form' id='register-form'>
                        

                        <div className="form-group">
                            <label htmlFor="email">
                            <i class="zmdi zmdi-email material-icons-name"></i>
                            </label>

                            <input type="email" name="email" id="email" autoComplete='off' 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder='Your Email'/>   
                        </div>


                        <div className="form-group">
                            <label htmlFor="password">
                            <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>

                            <input type="password" name="password" id="password" autoComplete='off'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder='Your Password'/>   
                        </div>



                        <div className="form-group">
                            <input type="submit" name='signin' id='signin'
                            onClick={loginSoleDistributor}
                            className='form-submit' value={"Login"} /> 
                            <p className='login-link my-3'>Don't have an account? <Link
                            to='/soleDistributor/register'>Sign Up</Link></p>
                        </div>
{/*                         
                        <div className="form-group">
                        <p className="signin-image-link">Already have an account? <NavLink to="/login">Login</NavLink></p>
                        </div> */}
                        


                    </form>
                    </div>
                

       
            </div>
        </div>
        </section>

        {/* <!-- Sole Distributor's Login End --> */}


        {/* <!-- Mission-Vision start --> */}

 <section className="targets">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="box fadeInUp">
                  <div className="icon-wrapper">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="details">
                    <h4>Mission</h4>
                    <p>
                      Our mission is to provide reliable and efficient
                      end-to-end supply chain solutions that optimize
                      businesses' processes and improve their bottom line. We
                      aim to build long-term relationships with our clients
                      based on trust, integrity, and excellence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box fadeInUp" data-delay=".2s">
                  <div className="icon-wrapper">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="details">
                    <h4>Vision</h4>
                    <p>
                      Our vision is to become the global leader in providing
                      innovative and customized supply chain solutions. We
                      strive to be a trusted partner for businesses of all
                      sizes, helping them achieve success through streamlined
                      operations and optimized processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Mission-Vision ends --> */}

       
    

     {/* <!-- Footer Start --> */}
     <div className="Footer">
          <Footer />
        </div>
        {/* <!-- Footer End -->*/}



        
    </>
  )
}
