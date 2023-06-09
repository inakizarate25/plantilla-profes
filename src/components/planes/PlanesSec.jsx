import Planes from "./Planes"
import img1 from '../../assets/pexels-anush-gorak-1229356.jpg'
import img2 from '../../assets/pexels-bruno-bueno-2204196.jpg'
import img3 from '../../assets/pexels-pixabay-414029.jpg'
import img4 from '../../assets/pexels-binyamin-mellish-116077.jpg'

const PlanesSec = () => {
  return (
    <section className='h-auto w-full flex flex-col items-start px-3 text-gray-50 py-5 gap-4'>
        <h2 className='text-3xl font-bold'>PLANES DE ASESORAMIENTO PERSONALIZADO</h2>
        <div className="flex flex-wrap gap-4 w-full items-start justify-around">
        <Planes 
        img={img1}
        titulo={'Plan de entrenamiento 1'}
        descripcion={<ul className="flex flex-col items-start justify-center text-xl text-neutral-500">
            <li>- rutina</li>
            <li>- asesoramiento</li>
            <li>- 3 dias</li>
            <li>- nutricion</li>
            <li>- antropometria</li>
        </ul>}
        precio={'$100'}
        />
        <Planes 
        img={img2}
        titulo={'Plan de entrenamiento 2'}
        descripcion={<ul className="flex flex-col items-start justify-center text-xl text-neutral-500">
            <li>- rutina</li>
            <li>- asesoramiento</li>
            <li>- 3 dias</li>
            <li>- nutricion</li>
            <li>- antropometria</li>
        </ul>}
        precio={'$100'}
        />
        <Planes 
        img={img3}
        titulo={'Plan de entrenamiento 3'}
        descripcion={<ul className="flex flex-col items-start justify-center text-xl text-neutral-500">
            <li>- rutina</li>
            <li>- asesoramiento</li>
            <li>- 3 dias</li>
            <li>- nutricion</li>
            <li>- antropometria</li>
        </ul>}
        precio={'$100'}
        />
        <Planes 
        img={img4}
        titulo={'Plan de entrenamiento 4'}
        descripcion={<ul className="flex flex-col items-start justify-center text-xl text-neutral-500">
            <li>- rutina</li>
            <li>- asesoramiento</li>
            <li>- 3 dias</li>
            <li>- nutricion</li>
            <li>- antropometria</li>
        </ul>}
        precio={'$100'}
        />

        </div>
        
    </section>
  )
}

export default PlanesSec