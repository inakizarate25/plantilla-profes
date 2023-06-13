import Home from "../components/inicio/Home"
import PlanesSec from "../components/planes/PlanesSec"
import BlogsCont from "../components/blogs/BlogsCont"
import Top from "../components/Top/Top"
import ProfesCont from "../components/profes/ProfesCont"
import Nosotros from "../components/nosotros/Nosotros"
import FaqCont from "../components/faq/FaqCont"
import Videos from "../components/videos/VideosCont"
import Contacto from "../components/contacto/Contacto"
import Footer from "../components/footer/Footer"
import Ropa from "../components/ropa/Ropa"

const Principal = () => {
  return (
   <>
      <Home />
      <PlanesSec/>
      <BlogsCont/>
      <Nosotros/>
      <ProfesCont/>
      <Videos/>
      <Ropa/>
      <FaqCont/>
      <Contacto/>
      <Footer/>
      <Top/>
   </>
  )
}

export default Principal