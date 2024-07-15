
import React,{useState,useEffect} from 'react'
import { createBrowserRouter, RouterProvider ,Navigate} from 'react-router-dom'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Login from './Components/Logon/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Movies from './Components/Movies/Movies';
import TV from './Components/TV/TV';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import jwtDecode from 'jwt-decode';
import { Offline } from 'react-detect-offline';

export default function App() {
  // check if the user login or not //api problem
  const [loggedInUser, setLoggedInUser] = useState(null)

    // function ProductedRoute(props){
    //   if (loggedInUser == null) {
    //     return <Navigate to='/login'  />
    //   }else{
    //     return <>{ props.children }</>
    //   }
    // }

   function checkReload() {                // this to prevent infinite loop of rendering
    if(localStorage.getItem('tkn') != null && loggedInUser==null){
      getLoggedInuser();
    }
   }


   function removeUserData() {
    localStorage.removeItem('tkn');
    setLoggedInUser(null)
   }
    function getLoggedInuser() {
      if (localStorage.getItem('tkn') != null) {
        let tkn = localStorage.getItem('tkn');
       let userData= jwtDecode(tkn);
      //  console.log(userData);
      setLoggedInUser(userData)
      }
    }
useEffect(() => {
 
  checkReload()

}, [])
        //ProductedRouted
  // const router=  createBrowserRouter([
  //   {path:'' , element:<Main curruser={loggedInUser} remove={removeUserData} />, children:[
  //    {path:'' ,element:  <ProductedRoute> <Home/> </ProductedRoute> },
  //    {path:'home' ,element: <ProductedRoute><Home/></ProductedRoute> },
  //    {path:'movies' ,element: <ProductedRoute> <Movies/></ProductedRoute> },
  //    {path:'tv' ,element: <ProductedRoute><TV/></ProductedRoute> },
  //    {path:'moviedetails' ,element: <ProductedRoute><MovieDetails/></ProductedRoute> ,children:[
  //      {path:":media" , children:[
  //        {path:":id"}
  //      ]}
  //    ]},
  //    {path:'login' ,element: <Login userInfo={getLoggedInuser }/>},
  //    {path:'register' ,element: <Register/>},
  //    {path:'*' ,element: <NotFound/>},
  //   ] }
   
  //  ])
   
  const router=  createBrowserRouter([
    {path:'' , element:<Main curruser={loggedInUser} remove={removeUserData} />, children:[
     {path:'' ,element: <Home/>},
     {path:'home' ,element: <Home/>},
     {path:'movies' ,element: <Movies/>},
     {path:'tv' ,element: <TV/>},
     {path:'moviedetails' ,element: <MovieDetails/>,children:[
       {path:":media" , children:[
         {path:":id"}
       ]}
     ]},
     {path:'login' ,element: <Login userInfo={getLoggedInuser }/>},
     {path:'register' ,element: <Register/>},
    ] },
    {path:'*' ,element: <NotFound/>}
   
   ])
   
  return <div>
    <Offline>
      <div className='bg-secondary position-fixed  p-2 bottom-0 start-0 text-white'>
   <h2>OOPS Your internet connection is lost</h2>
      </div>


    </Offline>


  <RouterProvider router={router}/>
  
  </div>
}

