import { useState } from "react"

const FaqCont = () => {
    const [accActive, setAccActive] = useState()

    let acordionData =[
        {
            title:'¿Qué es la nutrición?',
            acordionContent:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate nostrum atque libero doloremque sed laudantium recusandae, nobis, suscipit ad sapiente quos ipsum harum ullam aliquam quod autem? Expedita, inventore.',
        },
        {
            title:'¿cuanto tiempo tarda en llegarme el plan?',
            acordionContent:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate nostrum atque libero doloremque sed laudantium recusandae, nobis, suscipit ad sapiente quos ipsum harum ullam aliquam quod autem? Expedita, inventore.',
        },
        {
            title:'¿cuanto dura el asesoramiento?',
            acordionContent:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate nostrum atque libero doloremque sed laudantium recusandae, nobis, suscipit ad sapiente quos ipsum harum ullam aliquam quod autem? Expedita, inventore.',
        }
    ]

    const handleActive = (index) => {
        if(accActive === index){
            setAccActive()
        }else{
            setAccActive(index)
        }
    }




  return (
    <section className='h-auto w-full flex flex-col items-start px-3 text-gray-50 py-5 gap-4 border-t-2 border-cyan-900 my-10 max-w-screen-md md:items-center animate-fade-left animate-once animate-ease-in-out' id="preguntas">
        <h2 className='text-3xl font-bold'>PREGUNTAS FRECUENTES</h2>

        {
            acordionData.map((acc, index) => {
               return(
                <div className="accordion w-full" onClick={() => handleActive(index)} key={index}>
                    <div className="accordionHeading flex bg-cyan-900 w-full px-5 rounded-md gap-4 items-center py-2">
                        <span className="text-2xl font-semibold" style={{
                            transform: accActive === index ? 'rotate(45deg)' : 'rotate(0deg)'
                        }}>
                          +
                        </span>
                        <h4>{acc.title}</h4>

                    </div>
                    {
                        accActive === index ? <div className="accordionContent transition-all">
                            <p className="text-md font-medium px-3">{acc.acordionContent}</p>
                        </div>
                        : null
                    }
                </div>
               )
            })
        }


        
        
    </section>
  )
}

export default FaqCont