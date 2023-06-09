import { useState } from "react";

const Faq = ({pregunta, respuesta}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
      <button
        className="bg-orange-600 text-gray-50 font-bold py-3 px-4 rounded"
        onClick={toggleAccordion}
      >
        {pregunta}
      </button>
      {isOpen && (
        <div className="bg-neutral-500 px-4  py-2 rounded-md">
          <p className="text-lg font-semibold text-gray-100">{respuesta}</p>
        </div>
      )}
    </div>
  )
}

export default Faq