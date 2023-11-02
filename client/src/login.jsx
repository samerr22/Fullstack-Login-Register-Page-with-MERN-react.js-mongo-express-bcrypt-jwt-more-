import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import usEr from '/image/user.png';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import s55 from '/image/55.png';
import Chat from '/image/chat.png';
import Shoppin from '/image/shopping-cart.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';









function login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  
 

    const headerStyle = {
        backgroundColor: '#f98029',
        color: '#fff',
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height : '100px'
      };

      const searchBarStyle = {
        display: 'flex',
        alignItems: 'center',

      };
    
      const userActionsStyle = {
        display: 'flex',
        alignItems: 'center',

      };
   
      const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Login was successful, you can perform further actions like setting user state, redirecting, etc.
        console.log('Login successful');
        navigate('/eprofil');
      } else {
        // Handle other cases, e.g., incorrect password or user not found
        console.log('Login failed');
      }
    } catch (error) {
      // Handle any error that occurs during the API request
      console.error('API request error:', error);
    }
  };


 
    return(

      <div>
<header style={headerStyle}>
  <div style={{marginLeft: '190px'}}>
      <div style={{fontSize: '40px',fontFamily: 'Impact'}}>SAFICC</div>
      </div>
      <div style={searchBarStyle}>
        <input style={{width: '680px',height: '35px',borderRadius: '50px', marginLeft: '70px'  ,border: 'none'}}type="text" placeholder="Search..."  />
        <button style={{ marginLeft: '-70px', 
        backgroundColor: '#f98029', 
        color: '#fff', border: 'none', 
        borderRadius: '40px', cursor: 'pointer',
        height: '20px',
        fontSize: '15px',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        fontFamily: 'Garamond' }}>
    Search
  </button>
      </div>
      <div style={userActionsStyle}>
      <img src={usEr} alt="user" style={{ width: '40px', height: '40px', marginRight:'20px', }}/>
        <a href="#" style={{marginRight: '20px',fontFamily: 'Garamond'}}>Login</a>
        <a href="#" style={{marginRght: '20px',fontFamily: 'Garamond'}}>Sign Up</a>
        <div style={{marginLeft: '20px'}}></div>
        <img src={Shoppin} alt="user" style={{ width: '25px', height: '25px', marginRight: '200px', }}/>
      </div>  
 </header>


 <h3 style={{position: 'absolute',left: '400px',top: '170px',fontSize: '25px',fontFamily: 'Garamond'}}>Welcome to safic! pleace login</h3>
 
 <h3 style={{position: 'absolute',left: '990px',top: '170px',fontFamily: 'Garamond',fontSize: '15px'}}>New Member</h3>
 <button style={{position: 'absolute',left: '1080px',top: '167px',fontFamily: 'Garamond',fontSize: '15px', border: 'none', backgroundColor: 'white', color: 'blue'}}>Register </button>
 <h3 style={{position: 'absolute',left: '1150px',top: '170px',fontFamily: 'Garamond', fontSize: '15px'}}>Here</h3>

 <Card style={{ width: '50rem',
                   height: '20rem', 
                   border: 'none',
                   backgroundColor: 'rgba(100, 100, 100, 0.1)',
                   borderRadius: '8px',
                   position: 'absolute', 
                   top: '200px',
                   marginLeft: '400px',
                 
                   }}>
      <Card.Body>
      <form onSubmit={handleSubmit}>
    <h3 style={{position: 'absolute', fontSize: '15px', fontFamily: 'initial', top : '65px',left: '45px'}}>Email </h3>
    <input style={{position: 'absolute',width: '350px',height: '35px',top: '90px', border: 'none', borderRadius: '30px',left:'40px'}}
             type="text"
             placeholder="Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
     ></input>
    
     <h3 style={{position: 'absolute', fontSize: '15px', fontFamily: 'initial', top : '150px',left: '45px'}}>password </h3>
    <input style={{position: 'absolute',width: '350px',height: '35px',top: '165px',border: 'none',borderRadius: '30px',left:'40px'}}
    type="password"  // Use type="password" for password input
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    ></input>
    <h3 style={{position: 'absolute', fontSize: '10px', fontFamily: 'initial', top: '210px',left: '300px',color: 'blue'}}>Reset Password</h3>
    <button type="submit" style={{position: 'absolute', fontSize: '20px', fontFamily: 'initial', top: '90px',left: '500px',width: '250px',height: '40px', backgroundColor: '#7272FF',color: 'white',border: 'none',borderRadius: '50px'}}>Login</button>
    </form>
    <h3 style={{position: 'absolute', fontSize: '10px', fontFamily: 'initial', top: '150px',left: '600px'}}>Or,loign with</h3>
    <button style={{position: 'absolute', fontSize: '20px', fontFamily: 'initial', top: '190px',left: '500px',width: '250px',height: '40px', backgroundColor: '#E84B4F',color: 'white',border: 'none',borderRadius: '50px'}}>Google</button>
    

   
      </Card.Body>
    </Card> 
   
     







<div style={{}}>
   <hr className="middle-line" style={{color: '#f98029', marginTop: '480px',height: '5px',width: '100%', position: 'absolute' }}/>
   <img src={Chat} style={{marginTop: '500px',position: 'absolute', marginLeft: '270px', width: '20px',height: '20px',  }} />
        <h1  style={{color: '#f98029',marginTop: '500px',position: 'absolute',fontSize: '15px', marginLeft: '300px',fontFamily: 'Garamond'}}> chat withUs</h1> 
        <h1 style={{color: '#f98029',marginTop: '500px',position: 'absolute',fontSize: '15px', marginLeft: '1200px',fontFamily: 'Garamond'}}> About us</h1>
        <h1 style={{color: '#f98029',marginTop: '520px',position: 'absolute',fontSize: '15px', marginLeft: '1200px',fontFamily: 'Garamond'}}> Terms & Condition</h1>
        <h1 style={{color: '#f98029',marginTop: '540px',position: 'absolute',fontSize: '15px', marginLeft: '1200px',fontFamily: 'Garamond'}}> Privacy police</h1>
        <h1 style={{color: '#f98029',marginTop: '560px',position: 'absolute',fontSize: '15px', marginLeft: '1200px',fontFamily: 'Garamond'}}> Contact us</h1>
        
        </div>

    </div>

    )
}

export default login;