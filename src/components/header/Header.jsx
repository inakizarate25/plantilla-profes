import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css";

function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
    let link = document.querySelector(".link");
    let link1 = document.querySelector(".link1");
    let link2 = document.querySelector(".link2");
    let link3 = document.querySelector(".link3");
    let link4 = document.querySelector(".link4");
    let link5 = document.querySelector(".link5");
    let link6 = document.querySelector(".link6");
    link.addEventListener("click", () => {
      navRef.current.classList.remove("responsive_nav");
    })
    link1.addEventListener("click", () => {
      navRef.current.classList.remove("responsive_nav");
    })
    link2.addEventListener("click", () => {
      navRef.current.classList.remove("responsive_nav");
    })
    link3.addEventListener("click", () => {
      navRef.current.classList.remove("responsive_nav");
    })
    link4.addEventListener("click", () => {
      navRef.current.classList.remove("responsive_nav");
    })
    link5.addEventListener("click", () => {
      navRef.current.classList.remove("responsive_nav");
    })
    link6.addEventListener("click", () => {
      navRef.current.classList.remove("responsive_nav");
    })

    
	};

	return (
		<header>
			<h3 className="text-2xl font-bold">LOGO</h3>
			<nav ref={navRef}>
				<a className="link" href="#inicio">Inicio</a>
				<a className="link1" href="#planes">Planes</a>
				<a className="link2" href="#blogs">Blogs</a>
				<a className="link3" href="#personal">Personal</a>
        <a className="link4" href="#nosotros">Nosotros</a>
        <a className="link5" href="#preguntas">Preguntas</a>
        <a className="link6" href="#contacto">Contacto</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Header;