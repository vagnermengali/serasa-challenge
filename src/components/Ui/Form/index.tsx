import { useState } from 'react';
import Image from "next/image";
import DynamicText from "@/components/Ui/DynamicText";

const Form = () => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Avaliação:', rating);
    console.log('Nome:', name);
    console.log('Comentário:', comment);
  };

  const handleRating = (rate: any) => {
    setRating(rate);
  };

  const handleNameChange = (e: any) => {
    const newName = e.target.value;
    setName(newName);
    setIsNameValid(newName.trim().length > 0);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-light-solid w-[390px] h-[506px] flex flex-col items-center justify-center p-6 shadow-lg">
      <Image
        className="w-20 h-9 mb-4"
        src="/serasa-logo-full.svg"
        alt="Logo"
        width={144}
        height={60}
        title={'Logo'}
        loading='eager'
      />
      <DynamicText ariaLabel="Conte o quanto você está satisfeito com nossos serviços" level="p" title="Conte o quanto você está satisfeito com nossos serviços" className="mb-5 text-center text-dark-medium max-w-64">
        Conte o quanto você está satisfeito com nossos serviços
      </DynamicText>
      <DynamicText ariaLabel="Marque de 1 à 5 estrelas" level="p-bold" title="Marque de 1 à 5 estrelas" className="mb-2 text-center text-dark-high">
        Marque de 1 à 5 estrelas
      </DynamicText>
      <div className="flex justify-center items-center mb-5 gap-1">
        {[...Array(5)].map((_, index) => {
          const starIndex = index + 1;
          return (
            <button
              id={`estrela-${starIndex}`}
              role="button"
              aria-label={`Estrela ${starIndex}`}
              type="button"
              key={starIndex}
              className={`${starIndex <= rating ? 'text-magenta w-12 h-12' : 'text-magenta/50 w-12 h-12'} text-3xl leading-6 w-12 h-12 text-center overflow-hidden ease duration-300 outline-magenta/0 outline focus:outline-magenta/50 outline-offset-0  outline-4 rounded-lg`}
              onClick={() => handleRating(starIndex)}
              onMouseEnter={() => handleRating(starIndex)}
              onMouseLeave={() => setRating(rating)}
            >
              &#9733;
            </button>
          );
        })}
      </div>
      <div className="flex flex-col mb-5">
        <label className='body-bold mb-2'>Nome</label>
        <input
          type="text"
          placeholder='Nome'
          required
          className="w-52 p-2 border border-gray-300 ease duration-300 hover:border-magenta outline-magenta/0 outline focus:outline-magenta/50 outline-offset-0 outline-4 rounded-lg"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="flex flex-col mb-5">
        <label className='body-bold mb-2'>Comentário (Opcional)</label>
        <input
          type="text"
          placeholder='Comentário (Opcional)'
          className="w-52 p-2 border border-gray-300 ease duration-300 hover:border-magenta outline-magenta/0 outline focus:outline-magenta/50 outline-offset-0 outline-4 rounded-lg"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button
          id="button"
          role="button"
          aria-label="Enviar avaliação"
          type="submit"
          className={`${isNameValid ? 'w-52 px-4 py-2 bg-magenta/90 text-light-light hover:bg-magenta' : 'w-52 px-4 py-2 bg-light-light text-dark-low '} body-bold sease duration-300 outline-magenta/0 outline focus:outline-magenta/50 outline-offset-0 outline-4 rounded-lg`}
          disabled={!isNameValid}
        >
          Enviar avaliação
        </button>
      </div>
    </form>
  );
};

export default Form;
