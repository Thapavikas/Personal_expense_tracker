import {useState} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom';
import img1 from '../Register/img1.jpg'

export default function Register(){

    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3001/register',[username,email,password])
        .then(res=>navigate('/login'))
        .catch(err=>console.log(err))
    }

    return(
        <div className='register'>
                <img src={img1}></img>
                <form className="form-box"  onSubmit={handleSubmit}>
                    <p className="page1">Sign up</p>
                    <div className="input-container">
                        <label for='name'>Username </label>
                        <input id='name' type="text" placeholder='Username' name='username' required onChange={e=>setUsername(e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <label for='email'>User Email ID</label>
                        <input id='email' type="email" placeholder='Email' name='email' required onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <label for ="password">Password</label>
                    <input id='password' type="password" placeholder='Password' name='password' required onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <br />
                    <button type='submit'>Register</button>
                    <br />
                    <p className='page2'>Have an account? <Link to={'/login'}>Login</Link> </p>
                    
                </form>
        
        
        </div>
    )
}