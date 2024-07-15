import axios from "axios";
import Joi from "joi";
import React,{useState} from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function Register() {
const navigate=  useNavigate()
const [joiErrors, setJoiErrors] = useState(null)
const [apiMessage, setApiMessage] = useState("");
  const [user, setUser] = useState({
    first_name:'',
    last_name:'',
    age:0,
    email:'',
    password:''
  });

  function getUser(e) {
    // when write delete errors
    setJoiErrors(null)
    setApiMessage('')
let inputValue = e.target.value;
// console.log(e.target.id);
let newUser ={...user};
let property= e.target.id;
newUser[property]=inputValue;
setUser(newUser);

  }
 
  function getSpecificError(key){
  if(joiErrors != null){
    for(let i=0; i<joiErrors.length;++i){
      if(joiErrors[0].context.key == key){
        return joiErrors[0].message;
      }
    }
  }

  return '';
  }



  function submitUser(e){
  e.preventDefault();
const schema= Joi.object({
first_name:Joi.string().alphanum().min(3).max(10).required(),
last_name:Joi.string().alphanum().min(3).max(10).required(),
age:Joi.number().min(18).max(60).required(),
email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
password:Joi.string().pattern(/^[a-z]{6,10}$/i).required()
});
let joiResponse= schema.validate(user,{abortEarly:false});
if (joiResponse.error == undefined) {
  sendUser();
  //// i make that beacuse api not work
  navigate('/home');
  
}else{
console.log(joiResponse.error.details);
  setJoiErrors(joiResponse.error.details)
  
}
  }
async function sendUser(){
let {data}= await axios.post('https://routeegypt.herokuapp.com/signup',user);
// console.log(data);
if(data.message == "success"){
navigate('/home');
}else{
setApiMessage(data.message)
}
}
  return (
    <div>
         <Helmet>
      <title>Register</title>
      </Helmet>
      <div className="my-3 m-auto  w-50">
        {/* {joiErrors== null?'' : joiErrors.map( (error,idx) => <div key={idx} className="alert alert-danger"> {error.message}</div>) } */}
        {apiMessage.length == 0 ? "" : <div className="alert alert-danger"> {apiMessage} </div>}
        <form onSubmit={submitUser} >
          <h3 className="mb-4">Registeration Form</h3>

          <label htmlFor="first_name">First_name</label>
          <input onChange={getUser}
            type="text"
            id="first_name"
            placeholder="first_name"
            className="form-control mb-4"
          />
          {getSpecificError("first_name")?<div className="alert alert-danger">{getSpecificError("first_name")} </div>:''}
        

          <label htmlFor="last_name ">Last_name</label>
          <input onChange={getUser}
            type="text"
            id="last_name"
            placeholder="last_name"
            className="form-control mb-4"
          />
           {getSpecificError("last_name")?  <div className="alert alert-danger">{getSpecificError("last_name")} </div> :''}
          <label htmlFor="age">Age</label>
          <input onChange={getUser}
            type="number"
            id="age"
            placeholder="age"
            className="form-control mb-4"
          />
           {getSpecificError("age")? <div className="alert alert-danger">{getSpecificError("age")} </div>:''}

          <label htmlFor="email">Email</label>
          <input onChange={getUser}
            type="email "
            id="email"
            placeholder="email"
            className="form-control mb-4"
          />
           {getSpecificError("email")?<div className="alert alert-danger">{getSpecificError("email")} </div>:''}

          <label htmlFor="password">Password</label>
          <input onChange={getUser}
            type="password"
            id="password"
            placeholder="password"
            className="form-control mb-4"
          />
           {getSpecificError("password")? <div className="alert alert-danger"> Password must be 8 ch 1 digit</div>:''}

          <button  type="submit" className="btn btn-outline-info">Register</button>
        </form>
        
      </div>
    </div>
  );
}
