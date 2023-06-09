import Profes from "./Profes"
import img1 from '../../assets/pexels-andrew-personal-training-733500.jpg'
import img2 from '../../assets/pexels-thisisengineering-3912953.jpg'

const ProfesCont = () => {
  return (
    <section className='h-auto w-full flex flex-col items-start px-3 text-gray-50 py-5 gap-4 border-t-2 border-orange-600 my-10' id="personal">
        <h2 className='text-3xl font-bold'>NUESTRO PERSONAL</h2>

        <div className="flex flex-wrap gap-4 w-full items-start justify-around">
       <Profes
       img={img1}
       nombre="Tony Stark"
       rol="ENTRENADOR"
       />
       <Profes
       img={img2}
       nombre="Steve Rogers"
       rol="NUTRICIONISTA"
       />

        </div>
        
    </section>
  )
}

export default ProfesCont