import React from 'react'
import Blogs from './Blogs'
import img1 from '../../assets/339651049_3127806977511669_8739975468647276905_n.jpg'
import img2 from '../../assets/284481852_1033988250564905_3343393448094223184_n.jpg'

const BlogsCont = () => {
  return (
    <section className='h-auto w-full flex flex-col items-start px-3 text-gray-50 py-5 gap-4 mt-11 border-t-2 border-cyan-900' id='blogs'>
      <h2 className='text-3xl font-bold'>BLOGS</h2>

     <div className='flex flex-wrap w-full justify-around '>
     <Blogs
      img={img1}
      titulo='Powerlifting'
      descripcion={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate nostrum atque libero doloremque sed laudantium recusandae, nobis, suscipit ad sapiente quos ipsum harum ullam aliquam quod autem? Expedita, inventore.'}
      />

<Blogs
      img={img2}
      titulo='Polimetria'
      descripcion={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate nostrum atque libero doloremque sed laudantium recusandae, nobis, suscipit ad sapiente quos ipsum harum ullam aliquam quod autem? Expedita, inventore.'}
      />
     </div>

    </section>
  )
}

export default BlogsCont