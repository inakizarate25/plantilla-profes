import Profes from "./Profes"
import img1 from '../../assets/339671731_790850052624736_5730024564127580533_n.jpg'


const ProfesCont = () => {
  return (
    <section className='h-auto w-full flex flex-col items-start px-3 text-gray-50 py-5 gap-4  my-10' id="personal">
        {/* <h2 className='text-3xl font-bold'>NUESTRO PERSONAL</h2> */}

        <div className="flex flex-wrap gap-4 w-full items-start justify-around animate-fade-left animate-once animate-ease-in-out">
       <Profes
       img={img1}
       nombre="Facundo Anzorena"
       rol="COACH ONLINE"
       />

        </div>
        
    </section>
  )
}

export default ProfesCont