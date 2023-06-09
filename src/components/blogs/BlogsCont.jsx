import React from 'react'
import Blogs from './Blogs'
import img1 from '../../assets/pexels-victor-freitas-949129.jpg'
import img2 from '../../assets/pexels-li-sun-2294403.jpg'

const BlogsCont = () => {
  return (
    <section className='h-auto w-full flex flex-col items-start px-3 text-gray-50 py-5 gap-4 mt-11 border-t-2 border-orange-600' id='blogs'>
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