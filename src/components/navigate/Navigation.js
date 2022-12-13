import React from 'react'
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <>
        <nav className='navBar'>
            <div className='imgInNavbar'><Link to='/'>
            <img src="https://scalexcloud.com/wp-content/uploads/2021/12/scalexcloud-logo.png" alt="logo" />
            </Link></div>
            <div className='btnNavbar'>
                <button> <Link to='/'>Home</Link> </button>
                <button> <Link to='/about'>About</Link> </button>
                <button><Link to='contact'>Contact</Link> </button>
                <button > <Link to='/counter'>Counter</Link> </button>
            </div>
        </nav>
    </>
  )
}

export default Navigation;