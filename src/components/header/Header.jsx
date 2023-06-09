import "./style.css";

const Header = () => {

  return (
    <header className="h-auto w-screen bg-trasparent flex items-center justify-between gap-3 px-3 py-4">
      <a href="/" className="logo text-2xl font-bold px-3 text-gray-100">
        ENTRENAMIENTO
      </a>
      <ul className="navbar">
       <li><a href="#inicio">Inicio</a></li>
       <li><a href="#planes">Planes</a></li>
       <li><a href="#blogs">Blogs</a></li>
       <li><a href="#personal">Personal</a></li>
       <li><a href="#nosotros">Nosotros</a></li>
       <li><a href="#preguntas">Preguntas Frecuentes</a></li>
       <li><a href="#contacto">Contacto</a></li>
      </ul>

      <label className="hamburger burger bx bx-menu px-3 " onClick={() => {
let menu = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
})
        }}>
        <input type="checkbox"/>
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
    </header>
  );
};

export default Header;
