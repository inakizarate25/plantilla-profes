import {Link} from 'react-router-dom'
import img1 from '../assets/284481852_1033988250564905_3343393448094223184_n.jpg'
const Blog1 = () => {
  return (
    <section className='bg-neutral-900 h-auto w-full z-[100022] flex items-center px-4 py-10 justify-center flex-col'>
    <Link to='/' className='self-start text-lg text-cyan-900 font-semibold'>Volver</Link>
    <h2 className="text-3xl font-bold text-gray-100 py-10">BLOG 1</h2>

    <span className="flex flex-col gap-2 items-center justify-center px-3 pb-6 lg:flex-row">
        <img src={img1} alt="anzo" className='h-[400px] md:h-[650px] rounded-md 
        ' />
        <div className='flex flex-col gap-2 px-3 items-start justify-center max-w-[800px]'>
        <p className="text-md font-medium text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos ipsa dolorem earum tempore quo delectus impedit tempora dolorum harum rem officia, quod dolores fugiat. Aspernatur mollitia, harum nemo fugiat sunt praesentium corrupti, minus atque, cum est eius doloribus magnam. Molestias deleniti incidunt aut et minus quos neque aperiam vitae itaque harum voluptas, obcaecati velit sit qui exercitationem dicta. Unde provident enim doloribus vero. Quo voluptatum non voluptates, nobis repellat molestias rerum saepe sit doloribus? Repudiandae illum aliquam beatae doloribus corporis sequi optio explicabo consequatur, molestias incidunt commodi cumque repellat soluta. Eligendi, quo perferendis. Culpa fuga sunt voluptates unde asperiores?</p>
        <p className="text-md font-medium text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos ipsa dolorem earum tempore quo delectus impedit tempora dolorum harum rem officia, quod dolores fugiat. Aspernatur mollitia, harum nemo fugiat sunt praesentium corrupti, minus atque, cum est eius doloribus magnam. Molestias deleniti incidunt aut et minus quos neque aperiam vitae itaque harum voluptas, obcaecati velit sit qui exercitationem dicta. Unde provident enim doloribus vero. Quo voluptatum non voluptates, nobis repellat molestias rerum saepe sit doloribus? Repudiandae illum aliquam beatae doloribus corporis sequi optio explicabo consequatur, molestias incidunt commodi cumque repellat soluta. Eligendi, quo perferendis. Culpa fuga sunt voluptates unde asperiores?</p>
        <p className="text-md font-medium text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos ipsa dolorem earum tempore quo delectus impedit tempora dolorum harum rem officia, quod dolores fugiat. Aspernatur mollitia, harum nemo fugiat sunt praesentium corrupti, minus atque, cum est eius doloribus magnam. Molestias deleniti incidunt aut et minus quos neque aperiam vitae itaque harum voluptas, obcaecati velit sit qui exercitationem dicta. Unde provident enim doloribus vero. Quo voluptatum non voluptates, nobis repellat molestias rerum saepe sit doloribus? Repudiandae illum aliquam beatae doloribus corporis sequi optio explicabo consequatur, molestias incidunt commodi cumque repellat soluta. Eligendi, quo perferendis. Culpa fuga sunt voluptates unde asperiores?</p>
        <p className="text-md font-medium text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos ipsa dolorem earum tempore quo delectus impedit tempora dolorum harum rem officia, quod dolores fugiat. Aspernatur mollitia, harum nemo fugiat sunt praesentium corrupti, minus atque, cum est eius doloribus magnam. Molestias deleniti incidunt aut et minus quos neque aperiam vitae itaque harum voluptas, obcaecati velit sit qui exercitationem dicta. Unde provident enim doloribus vero. Quo voluptatum non voluptates, nobis repellat molestias rerum saepe sit doloribus? Repudiandae illum aliquam beatae doloribus corporis sequi optio explicabo consequatur, molestias incidunt commodi cumque repellat soluta. Eligendi, quo perferendis. Culpa fuga sunt voluptates unde asperiores?</p>
        </div>
        
    </span>
    <Link to='/' className='self-start text-xl text-gray-100 font-semibold px-4 py-3 bg-cyan-900 rounded-md hover:scale-90'>Volver</Link>
   </section>
  )
}

export default Blog1