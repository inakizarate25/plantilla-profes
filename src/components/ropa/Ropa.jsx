import img1 from '../../assets/910efb6b-ea66-46d1-9fc1-6bd79d08cdc6.png'

const Ropa = () => {
  return (
    <section className='border-t-2 border-cyan-900 py-4 my-8 flex flex-wrap items-center justify-around gap-10'>
        <h3 className='text-3xl font-bold text-gray-100 px-4 animate-fade-left animate-once animate-ease-in-out'>MI MARCA DE ROPA PERSONAL</h3>

        <img src={img1} alt="ropa" className='animate-fade animate-once animate-ease-in'/>
        <a className='px-4 py-3 text-2xl text-gray-100 font-semibold bg-cyan-900 rounded-md animate-fade-right animate-once animate-ease-in-out' href="https://www.instagram.com/legenderfit/">Ver Productos</a>
    </section>
  )
}

export default Ropa