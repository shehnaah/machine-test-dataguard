import React, { useState } from 'react'
import {Button,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
    const[email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [login,setLogin] = useState(false)
    const handleLogin=()=>{
        if(email==='+918086808680' && password==="123456"){
setLogin(true)
        }
    }
  return (
    <div>
      <img src={process.env.PUBLIC_URL + 'img/welcome.png'} width={'100%'} height={'250px'} /> 
      
      <h3>Welcome</h3>
      <div className="row mt-5">
        <div className="col-lg-5"></div>
        <div className="col-lg-2">
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-secondary' style={{marginRight:'130px'}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name='email'  onChange={e=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{marginRight:'160px'}} className='text-secondary'>Password</Form.Label>
        <Form.Control type='password' rows={3} placeholder='******' name='password' onChange={e=>setPassword(e.target.value)} />
      </Form.Group>
      {Login &&
      <Button style={{backgroundColor:'#718341',borderRadius:'20px',border:'none',width:'130px'}} className='text-light' onClick={handleLogin}>
       
        <Link to={'/products'} style={{textDecoration:'none',color:'white'}}>Login</Link>
        
      </Button>}
    </Form>
        </div>
        <div className="col-lg-5"></div>

      </div>     
       <img src={process.env.PUBLIC_URL + 'img/building.png'}  /> 

      <img src={process.env.PUBLIC_URL + 'img/building.png'}  /> 
      <img src={process.env.PUBLIC_URL + 'img/building.png'}  /> 


    </div>
  )
}

export default Login
