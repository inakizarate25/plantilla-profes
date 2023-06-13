

const Videos = () => {
  return (
    <section className='h-auto w-full flex flex-col items-start px-3 text-gray-50 py-5 gap-4 mt-11 border-t-2 border-cyan-900' id='blogs'>
      <h2 className='text-3xl font-bold'>Videos</h2>

     <div className='flex flex-wrap w-full justify-around '>
     <iframe className="w-full px-1 h-[250px] py-7 max-w-2xl md:h-[420px] animate-fade-left animate-once animate-ease-in-out"   src="https://www.youtube.com/embed/j7oxuSSltj0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

     <iframe className="w-full px-1 h-[250px] py-7 max-w-2xl md:h-[420px] animate-fade-right animate-once animate-ease-in-out"   src="https://www.youtube.com/embed/zdM0ysXMrJ4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
     
     </div>

     <a href="https://www.youtube.com/@anzzo._/featured" className="px-3 py-2 bg-cyan-900 text-white font-semibold rounded-md hover:scale-95 animate-fade-left animate-once animate-ease-in-out self-center">Ir a YouTube</a>

    </section>
  )
}

export default Videos