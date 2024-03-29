import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import img2 from '../Login/img2.jpg'

export default function Login(){

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3001/login',[email,password])
        .then(res=>console.log('Sucessfull'))
        .catch(err=>console.log(err))
    }

    return(
        <div className='Login_page'>
                <img src={img2}></img>
                <form className="login-box"  onSubmit={handleSubmit}>
                    <p className="page1">Login Page</p>
                    <div className="login-container">
                        <label for='email'>User Email ID</label>
                        <input id='email' type="email" placeholder='Email' name='email' onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="login-container">
                        <label for="password">Password</label>
                        <input id='password' type="password" placeholder='Password' name='password' onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <br />
                    <button type='submit'>Login</button>
                    <br />
                    <p className='page3'>Don't have an account? <Link to={'/register'}>Sign up</Link> </p>
                    
                </form>
        
        </div>
    )
}