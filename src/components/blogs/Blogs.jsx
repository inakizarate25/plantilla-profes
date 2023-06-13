import { Children } from "react"
import { Link } from "react-router-dom"

const Blogs = ({img, titulo, descripcion , link}) => {
  return (
   <article className="w-full md:w-[400px] h-auto py-4 px-5 flex flex-col items-start shadow-lg rounded-md gap-2 animate-fade-right animate-once animate-ease-in-out">
    <img src={img} alt="training" className="w-full h-auto  rounded-lg" />
    <h3  className='text-3xl font-semibold'>{titulo}</h3>
    <p className="text-lg font-semibold text-neutral-500">{descripcion}</p>
    <Link to={link} className="px-5 py-3 text-2xl font-semibold bg-cyan-900 rounded-lg hover:scale-90 transition-all">Leer</Link>
   </article>
  )
}

export default Blogs