import React ,{useState} from 'react'

import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import  Joi  from 'joi';
import { Helmet } from 'react-helmet';

export default function Login({userInfo}) {
  const navigate=  useNavigate()
  const [joiErrors, setJoiErrors] = useState(null)
    const [user, setUser] = useState({

      email:'',
      password:''
    });
  const [apiMessage, setApiMessage] = useState("");
    function getUser(e) {
  let inputValue = e.target.value;
  // console.log(e.target.id);
  let newUser ={...user};
  let property= e.target.id;
  newUser[property]=inputValue;
  setUser(newUser);
  
    }
  
    function submitUser(e){
    e.preventDefault();
  const schema= Joi.object({
 
  email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password:Joi.string().pattern(/^[a-z]{6,10}$/i).required()
  });
  let joiResponse= schema.validate(user,{abortEarly:false});
  if (joiResponse.error == undefined) {
    sendUser();
    // i make that beacuse api not work
    // navigate('/home');
  }else{
  
    setJoiErrors(joiResponse.error.details)
    
  }
    }
  async function sendUser(){
  let {data}= await axios.post('https://routeegypt.herokuapp.com/signin',user);
  console.log(data);
  if(data.message == "success"){
    localStorage.setItem('tkn' , data.token)
    userInfo()
  navigate('/home');
  }else{
  setApiMessage(data.message)
  }
  }
    return (
      <div>
      <Helmet>
      <title>Login</title>
      </Helmet>
        <div className="my-3 m-auto  w-50">
          {joiErrors== null?'' : joiErrors.map( (error,idx) => <div un={idx} className="alert alert-danger"> {error.message}</div>) }
          {apiMessage.length == 0 ? "" : <div className="alert alert-danger"> {apiMessage} </div>}
          <form onSubmit={submitUser} >
            <h3 className="mb-4">Login Form</h3>
  
           
            <label htmlFor="email">Email</label>
            <input onChange={getUser}
              type="email "
              id="email"
              placeholder="email"
              className="form-control mb-4"
            />
  
            <label htmlFor="password">Password</label>
            <input onChange={getUser}
              type="password"
              id="password"
              placeholder="password"
              className="form-control mb-4"
            />
  
            <button  type="submit" className="btn btn-outline-info">Login</button>
          </form>
          
        </div>
      </div>
    );
  }
  