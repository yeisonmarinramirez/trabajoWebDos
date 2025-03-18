import userLogo from '../assets/user.jpg'

const MenuNavegacion = () => {
  return (
    <aside className="menu-navegacion">
      <div className="menu-navegacion-logo">
        <img src={userLogo} alt="" />
      </div>
      <nav className="menu-navegacion-nav">
        <ul>
          <li>
            INSTAGRAM
          </li>
          <li>FACEBOOCK</li>
          <li>TELEGRAM</li>
          <li>CORREO</li>
          
        </ul>
      </nav>
    </aside>
  )
}

export default MenuNavegacion