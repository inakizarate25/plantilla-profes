import mail from '../../assets/envelope.svg'
import phone from '../../assets/phone-alt.svg'
import map from '../../assets/map-marker.svg'
const Contacto = () => {
  return (
    <section className="h-auto w-full  flex flex-col items-center justify-center gap-5 border-t-2 border-cyan-900 py-5 my-10 animate-fade-right animate-once animate-ease-in-out">
        <h4 className="text-gray-100 text-3xl font-bold">CONTACTO</h4>

        <form className="flex flex-col gap-5 w-full px-6 items-center justify-center max-w-screen-md">
            <div className="flex flex-col gap-1 items-start justify-center w-full">
                <label htmlFor="name" className="text-xl text-gray-100 font-medium">Nombre</label>
                <input type="text" name="name" id="name" className="w-full px-2 bg-neutral-800 h-12 rounded-md text-gray-100 font-medium text-lg"/>
            </div>
            <div className="flex flex-col gap-1 items-start justify-center w-full">
                <label htmlFor="email" className="text-xl text-gray-100 font-medium">Email</label>
                <input type="email" name="email" id="email" className="w-full px-2 bg-neutral-800 h-12 rounded-md text-gray-100 font-medium text-lg"/>
            </div>
            <div className="flex flex-col gap-1 items-start justify-center w-full">
                <label htmlFor="message" className="text-xl text-gray-100 font-medium">Mensaje</label>
                <textarea name="message" id="message" cols="30" rows="10" className="bg-neutral-800 w-full px-2 py-2 h-32 rounded-md text-gray-100 font-medium"></textarea>
            </div>
            <button type="submit" className="w-full bg-cyan-900 h-12 rounded-md text-gray-100 font-medium">Enviar</button>
        </form>

        <div className='flex flex-col items-center justify-start w-full'>
            <div className='flex items-start justify-between gap-5 w-64'>
                <img src={mail} alt="mail-logo"  className='h-12'/>
                <div>
                    <p className='text-gray-100 text-2xl font-semibold'>Mail</p>
                    <p className='text-gray-100 text-xl font-medium'>tonystark@gmail.com</p>
                </div>
            </div>
            <div className='flex items-start justify-start gap-5 w-64'>
                <img src={phone} alt="celular-logo"  className='h-12'/>
                <div>
                    <p className='text-gray-100 text-2xl font-semibold'>Celular</p>
                    <p className='text-gray-100 text-xl font-medium'>11 234456677</p>
                </div>
            </div>
            <div className='flex items-start justify-start gap-5 w-64'>
                <img src={map} alt="map-logo"  className='h-12'/>
                <div>
                    <p className='text-gray-100 text-2xl font-semibold'>Ubicacion</p>
                    <p className='text-gray-100 text-xl font-medium'>Buenos aires</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacto