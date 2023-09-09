import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App';
import about from './Components/Body/about';
import contact from './Components/Body/contact';
import cart from './Components/Body/cart';

const appRounter= createBrowserRouter([
  {path:"/",
element:<App/>},
{path:"/about",
element:<about/>},
{path:"/contact",
element:<contact/>,},
{path:"/cart",
element:<cart/>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRounter}/>
  </React.StrictMode>
);

