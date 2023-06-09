import React from 'react'

const Header = () => {
  return (
    <header className='h-auto w-full bg-neutral-900 flex flex-wrap gap-3 '>
        <a href="/" className='text-2xl font-bold px-3 text-gray-100'>ENTRENAMIENTO</a>
        <ul>
            <li>Inico</li>
            <li>Planes</li>
            <li>Blogs</li>
            <li>Personal</li>
            <li>Nosotros</li>
            <li>Preguntas</li>
        </ul>
    </header>
  )
}

export default Header