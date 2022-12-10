import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { routes } from '../routes'
import { useEstadoGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {dispatch} = useEstadoGlobal();

  const cambiarTema = () => {
    dispatch();
  }

  return (
    <nav>
      <div className='nav'>
        <Outlet />
        <Link to={routes.favs}>Favs</Link>
        <Link to={routes.contact}>Contact</Link>
        <Link to={routes.home}>Home</Link>
        
      </div>

<button onClick={cambiarTema}>Cambiar Tema</button>

    </nav>
  )
}

export default Navbar