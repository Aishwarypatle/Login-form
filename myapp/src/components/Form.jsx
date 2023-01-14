import React from 'react'
import {IoPersonCircle} from 'react-icons/io5'
import {GoKey} from 'react-icons/go'
import Google from '../images/google.png'
import Github from '../images/github.png'
import Twitter from '../images/twitter.png'
import '../components/form.css'

const Form = () => {
  return (
  <>
    <div className='bg-dark d-flex justify-content-center align-items-center 100vh 100vh shadow-lg backg'>
        <div className='d-flex justify-content-center align-items-center 50vh 50vh'>
            <div className='d-grid p-auto'>
                <div className='container'>
                    <div className='header'>
                        <h3 className='m-auto fw-bold '>Login</h3>                   
                    </div>

                    <div className='d-grid'>
                        <p>Username</p>
                        <span> <IoPersonCircle /> </span><input type="text" placeholder="Username"></input>
                        <p>Password</p>
                        <span><GoKey /></span> <input type="password" ></input>
                        <a href='/'>Forgot Password</a>
                        <button className='btn btn-danger p-2'> Submit</button>
                    </div>

                    <div className='d-grid'>
                        <h5 className='m-auto'>Or Sign-Up Using</h5>
                        <div className='d-flex justify-content-evenly align-item-center'>
                            <img src={Google} alt="google"></img>
                            <img src={Github} alt="github"></img>
                            <img src={Twitter} alt="twitter"></img>

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
