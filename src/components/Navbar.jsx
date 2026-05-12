import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import '../styles/Navbar.css'

// Links de navegación — cada uno apunta a una sección de la página
const navLinks = [
  { label: 'Inicio',      href: '#hero' },
  { label: 'Índice',      href: '#indice' },
  { label: 'Objetivos',   href: '#objetivos' },
  { label: 'Evidencias',  href: '#evidencias' },
  { label: 'Reflexión',   href: '#reflexion' },
  { label: 'Acerca de',   href: '#acerca' },
  { label: 'Anexos',      href: '#anexos' },
]

function Navbar() {
  // Controla si el menú móvil está abierto o cerrado
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
      </ul>

      {/* Botón hamburguesa para móvil */}
      <button
        className="navbar-hamburger"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú móvil desplegable */}
      {menuAbierto && (
        <ul className="navbar-mobile">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuAbierto(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar