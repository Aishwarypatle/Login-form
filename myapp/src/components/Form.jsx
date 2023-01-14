import React from 'react'
import {IoPersonSharp} from 'react-icons/io5'
import {GoKey} from 'react-icons/go'
import Google from '../images/google.png'
import Github from '../images/github.png'
import Twitter from '../images/twitter.png'
import '../components/form.css'

const Form = () => {
  return (
  <>
    <div className='bg-dark d-flex justify-content-center align-items-center vh-100 vw-100 shadow-lg backg'>
        <div className='card m-auto d-flex justify-content-center align-items-center'>
            <div className='d-grid'>
                <div className='container'>
                    <div className='header d-flex justify-content-center'>
                        <h3 className='m-auto fw-bold mt-4'>Login</h3>                   
                    </div>

                    <div className='d-grid mt-3'>
                       <div className='field d-grid'>
                            <p className='fw-bold'>Username</p>
                                <div className='d-flex justify-content-center m-0'>
                                        <IoPersonSharp style={{margin:"auto"}} />
                                    <input type="text" placeholder="Username"></input>
                                </div>
                        </div>

                        <div className='field d-grid'>
                            <p className='fw-bold mt-3'>Password</p>
                            <div className='d-flex justify-content-center m-0'>
                                        <GoKey style={{margin:"auto"}} />
                                    <input type="password" placeholder="Password"></input>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end mt-2'>
                            <a href='/'>Forget Password?</a>
                        </div>
                        <button className='p-2 mt-4 fw-bold'> SUBMIT</button>
                    </div>

                    <div className='d-grid'>
                        <h6 className='m-auto mt-4'>Or Sign-Up Using</h6>
                        <div className='d-flex justify-content-evenly align-item-center mt-3'>
                            <img src={Google} alt="google"></img>
                            <img src={Github} alt="github"></img>
                            <img src={Twitter} alt="twitter"></img>
                            <br/>
                            <br/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default Form
