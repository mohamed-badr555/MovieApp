
import React,{useState} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Login from './Components/Logon/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Movies from './Components/Movies/Movies';
import TV from './Components/TV/TV';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import jwtDecode from 'jwt-decode';

export default function App() {
  // check if the user login or not //api problem
  // const [loggedInUser, setLoggedInUser] = useState(null)
  //   function getLoggedInuser() {
  //     if (localStorage.getItem('tkn') != null) {
  //       let tkn = localStorage.getItem('tkn');
  //      let userData= jwtDecode(tkn);
  //     //  console.log(userData);
  //     setLoggedInUser(userData)
  //     }
  //   }

  const router=  createBrowserRouter([
    {path:'' , element:<Main />, children:[
     {path:'' ,element: <Home/>},
     {path:'home' ,element: <Home/>},
     {path:'movies' ,element: <Movies/>},
     {path:'tv' ,element: <TV/>},
     {path:'moviedetails' ,element: <MovieDetails/>,children:[
       {path:":media" , children:[
         {path:":id"}
       ]}
     ]},
     {path:'login' ,element: <Login/>},
     {path:'register' ,element: <Register/>},
     {path:'*' ,element: <NotFound/>},
    ] }
   
   ])
  return <>
  
  <RouterProvider router={router}/>
  
  </>
}

