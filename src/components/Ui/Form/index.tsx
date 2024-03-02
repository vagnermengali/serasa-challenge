import { useState } from 'react';
import Image from "next/image";
import DynamicText from "@/components/Ui/DynamicText";

const Form = () => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Avaliação:', rating);
    console.log('Nome:', name);
    console.log('Comentário:', comment);
  };

  const handleRating = (rate: any) => {
    setRating(rate);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-light-solid w-[390px] h-[506px] flex flex-col items-center justify-center p-6 shadow-lg">
      <Image
        className="w-20 h-9 mb-4"
        src="/serasa-logo-full.svg"
        alt="Ir para página inicial"
        width={144}
        height={60}
        title={'Ir para página inicial'}
      />
      <DynamicText ariaLabel="" level="p" title="" className="mb-5 text-center text-dark-medium max-w-64">Conte o quanto você está satisfeito com nossas serviços</DynamicText>
      <DynamicText ariaLabel="" level="p-bold" title="" className="mb-2 text-center text-dark-high">Marque de 1 à 5 estrelas</DynamicText>
      <div className="flex justify-center mb-5">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? 'text-magenta' : 'text-light-light'}
              onClick={() => handleRating(index)}
              onMouseEnter={() => handleRating(index)}
              onMouseLeave={() => setRating(rating)}
            >
              <span className="text-3xl">&#9733;</span>
            </button>
          );
        })}
      </div>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Nome"
          required
          className="w-52 p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Comentário (Opcional)"
          className="w-52 p-2 border border-gray-300 rounded"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="w-52 px-4 py-2 bg-magenta/90 text-white hover:bg-magenta rounded"
        >
          Enviar avaliação
        </button>
      </div>
    </form>
  );
};

export default Form;