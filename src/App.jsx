import Home from "./components/inicio/Home"
import PlanesSec from "./components/planes/PlanesSec"
import BlogsCont from "./components/blogs/BlogsCont"
import Top from "./components/Top/Top"
import ProfesCont from "./components/profes/ProfesCont"
import Nosotros from "./components/nosotros/Nosotros"
import FaqCont from "./components/faq/FaqCont"
import Header from "./components/header/Header"
import Contacto from "./components/contacto/Contacto"
import Footer from "./components/footer/Footer"
function App() {
 
  return (
    <main className="h-auto w-full bg-neutral-900 flex flex-col items-center gap-3">
      <Header />
      <Home />
      <PlanesSec/>
      <BlogsCont/>
      <ProfesCont/>
      <Nosotros/>
      <FaqCont/>
      <Contacto/>
      <Footer/>
      <Top/>
    </main>
  )
}

export default App
