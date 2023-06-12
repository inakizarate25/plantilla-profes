import Planes from "./Planes"
import img1 from '../../assets/244742754_381907060312919_3385626588482423734_n.jpg'
import img2 from '../../assets/272745321_983809498887073_1972967795930371697_n.webp'
import img3 from '../../assets/298870478_474745141327484_7423272441161220890_n.jpg'


const PlanesSec = () => {
  return (
    <section className='h-auto w-full flex flex-col items-start px-3 text-gray-50 py-5 gap-4' id="planes">
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

        </div>
        
    </section>
  )
}

export default PlanesSec