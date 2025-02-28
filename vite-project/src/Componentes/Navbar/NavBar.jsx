import React from 'react'
// import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
    <Link to="/">
      <img
        className="ImagenLogo"
        src="./img/LogoLogisticaLoDeMickol.png"
        alt="Logo Logística LoDeMickol"
      />
    </Link>
    <h1 className='NavarH1'>Logística LoDeMickol</h1>

    {/* Botón hamburguesa */}
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
      ☰
    </button>

    {/* Menú de navegación */}
    <nav className={menuOpen ? "open" : ""}>
      <ul>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <h2 className='NavarH2'>Inicio</h2>
          </Link>
        </li>
        <li>
          <Link to="/categoria/Hombre" onClick={() => setMenuOpen(false)}>
            <h2 className='NavarH2'>Empresa</h2>
          </Link>
        </li>
        <li>
          <Link to="/categoria/Mujer" onClick={() => setMenuOpen(false)}>
            <h2 className='NavarH2'>Contacto</h2>
          </Link>
        </li>
      </ul>
    </nav>
  </header>


  )
}

export default NavBar