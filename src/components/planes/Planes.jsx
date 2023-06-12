import React from 'react'

const Planes = ({img, titulo, descripcion, precio}) => {
  return (
    <article className='w-full h-auto py-4 px-5 flex flex-col items-start shadow-lg rounded-md gap-2 md:w-96'>
       <h3 className='text-3xl font-semibold'>{titulo}</h3>
      <img src={img} alt="training" className='w-full h-auto  rounded-lg'/>
      <div className='flex justify-center items-center'>{descripcion}</div>
      <p className='text-2xl font-semibold '>{precio}</p>
      <button className='px-4 py-3 text-2xl font-semibold bg-orange-600 rounded-lg hover:scale-90 transition-all self-center'>Adquirir</button>
    </article>
  )
}

export default Planes