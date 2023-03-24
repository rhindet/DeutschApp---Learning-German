import React  from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.module.css'

const Header = () => {
  return (
    <div>
      <nav className='nav'>
        <h3>Deutsch Trivia</h3>
        <Link className='nav-items' to="/">Verbs</Link>
        <Link className='nav-items' to="/modals">Modals</Link>
      </nav>
    </div>
  )
}

export default Header
