import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import '../styles/Navbar.css'

const navLinks = [
  { label: 'Inicio',     href: '#hero' },
  { label: 'Índice',     href: '#indice' },
  { label: 'Objetivos',  href: '#objetivos' },
  { label: 'Evidencias', href: '#evidencias' },
  { label: 'Reflexión',  href: '#reflexion' },
  { label: 'Acerca de',  href: '#acerca' },
]

function Navbar({ onAbrirAnexos }) {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <nav className="navbar">
      <span className="navbar-logo">Portafolio</span>

      {/* Menú desktop */}
      <ul className="navbar-links">
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        {/* Anexos abre modal */}
        <li>
          <button className="navbar-anexos-btn" onClick={onAbrirAnexos}>
            Anexos
          </button>
        </li>
      </ul>

      {/* Botón hamburguesa */}
      <button className="navbar-hamburger" onClick={() => setMenuAbierto(!menuAbierto)}>
        {menuAbierto ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú móvil */}
      {menuAbierto && (
        <ul className="navbar-mobile">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuAbierto(false)}>{link.label}</a>
            </li>
          ))}
          <li>
            <button className="navbar-anexos-btn" onClick={() => { onAbrirAnexos(); setMenuAbierto(false) }}>
              Anexos
            </button>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
