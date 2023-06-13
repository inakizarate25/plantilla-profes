import React from 'react'

const Home = () => {
  return (
    <section className="h-auto w-full flex flex-col items-start px-5 text-gray-50 py-10 my-10 gap-4 md:h-[60vh] md:justify-center md:items-center   max-w-4xl" id='inicio'>
        <div className='bg-neutral-700 w-auto h-auto rounded-3xl py-2 px-3 animate-fade-left animate-once animate-ease-in-out'><span className='bg-cyan-900 px-2  py-1 rounded-xl font-semibold'>15% OFF</span> El plan mas eficiente para tu meta</div>
        <h1 className='text-7xl font-semibold animate-fade-right animate-once animate-ease-in-out'>Personal Training</h1>
        <p className='py-5 text-xl text-neutral-300 font-medium md:text-center animate-fade-left animate-once animate-ease-in-out'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='flex justify-center items-center w-full gap-6 animate-fade-right animate-once animate-ease-in-out'>
            <a href="#planes" className='px-5 py-4 bg-cyan-900 rounded-lg font-bold text-2xl hover:scale-90 transition-all'>Comenzar</a>
            <a href="#contacto" className='px-5 py-4 bg-neutral-700 rounded-lg font-bold text-2xl hover:scale-90 transition-all'>Contacto</a>
        </div>
    </section>
  )
}

export default Home