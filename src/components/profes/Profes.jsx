import React from 'react'

const Profes = ({img, nombre, rol}) => {
  return (
    <article className='w-full h-auto py-4 px-5 flex flex-col items-start shadow-lg rounded-md gap-2 md:w-96'>
      <img src={img} alt={nombre}   className='w-full h-auto md:w-72 rounded-lg'/>
      <h3 className='text-3xl font-semibold'>{nombre}</h3>
      <p className='text-xl font-semibold  text-neutral-500'>{rol}</p>

    </article>
  )
}

export default Profes