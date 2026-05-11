import { useState, useEffect } from 'react'
import './Header.css'

export default function Header({ scrollToContact }) {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen]   = useState(false)

  useEffect(() => {
    const fn = () => setStuck(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`header ${stuck ? 'stuck' : ''}`}>
      <div className="header-row container">
        <div className="logo">
          <div className="logo-orb" />
          <span className="logo-name">SolarEx</span>
        </div>
        <nav className="nav">
          <a href="#hero">Home</a>
          <a href="#video">About</a>
          <a href="#planets">Planets</a>
          <a href="#facts">Facts</a>
          <button className="btn btn-blue" onClick={scrollToContact}>Contact Us</button>
        </nav>
        <button className={`nav-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
          <span/><span/><span/>
        </button>
      </div>
      {open && (
        <nav className="mobile-nav">
          <a href="#hero"    onClick={() => setOpen(false)}>Home</a>
          <a href="#video"   onClick={() => setOpen(false)}>About</a>
          <a href="#planets" onClick={() => setOpen(false)}>Planets</a>
          <a href="#facts"   onClick={() => setOpen(false)}>Facts</a>
          <button className="btn btn-blue" onClick={() => { scrollToContact(); setOpen(false) }}>
            Contact Us
          </button>
        </nav>
      )}
    </header>
  )
}