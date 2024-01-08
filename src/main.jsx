import React from 'react'; 
import { createRoot } from 'react-dom/client';
import "./index.css";
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MenuHeader } from './components/header/menuHeader.jsx';
import Inicio from './components/Inicio/Inicio.jsx';
import FullScreenComponent from './components/header/fullScreen.jsx';
import ErrorPage from './error-page.jsx';
import { Servicios } from './components/servicios/Servicios.jsx';
import { ServiciosExtend } from './components/servicios/serviciosExtend/serviciosExtend.jsx';
import { EstudioCont } from './components/EstudioCont/EstudioCont.jsx';
import { Clients } from './components/clients/clients.jsx';
import { CronogramaDeclaraciones } from './components/cronograma/cronogramaDe.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <MenuHeader/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Inicio/>
      },
      {
        path: "fullscreen",
        element:<FullScreenComponent/>
      },
      {
        path: "servicios",
        element: <Servicios/>
      },
      {
        path:"servicios/:id",
        element: <ServiciosExtend/>,
      },
      {
        path:"estudio contable",
        element: <EstudioCont/>
      },
      {
        path:"clientes",
        element: <Clients/>
      },
      {
        path:"cronograma de declaraciones",
        element: <CronogramaDeclaraciones/>
      }
    ]
  },
  
])

const root = document.getElementById('root');
const rootInstance = createRoot(root);
rootInstance.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
