import "./style.css";

const Header = () => {




const nav = () => {
  let hamburger = document.getElementById('hamburger');
  let navLinks = document.getElementById('nav-links');
      navLinks.classList.toggle('hide');
      hamburger.classList.toggle('lines-rotate');
}
let links = document.querySelectorAll('#links');
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    navLinks.classList.toggle('hide');
  });

}
   




return(
  <nav>
  <h1 id="logo" className="text-2xl font-bold text-gray-100">LOGO</h1>
  

  <div className="hamburger" id="hamburger" onClick={() => nav()}>
    <span className="lines"></span>
    <span className="lines"></span>
    <span className="lines"></span>
  </div>
  

  <ul id="nav-links">
    <li><a href="#inicio" className="links" id="links">Inicio</a></li>
    <li><a href="#planes" className="links" id="links">Planes</a></li>
    <li><a href="#blogs" className="links" id="links">Blogs</a></li>
    <li><a href="#personal" className="links" id="links">Personal</a></li>
    <li><a href="#nosotros" className="links" id="links">Nosotros</a></li>
    <li><a href="#preguntas" className="links" id="links">Preguntas</a></li>
    <li><a href="#contacto" className="links" id="links">Contacto</a></li>
  </ul>
  </nav>
)

};

export default Header;
