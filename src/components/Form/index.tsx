import { useState } from 'react';
import Image from "next/image";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import DynamicText from "@/components/Ui/DynamicText";
import Modal from '@/components/Modal';

import { FormDataInterface } from '@/interfaces/FormDataInterface';
import schemaRating from "@/validators/rating";

const Form = () => {
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [rating, setRating] = useState<number>(0); // Defina rating como um número
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormDataInterface>({
    resolver: yupResolver(schemaRating)
  });

  const onSubmit = async (data: FormDataInterface) => {
    const formDataWithRating = { ...data, rating };
    setShowLoadingModal(true);
    try {
      const response = await fetch('/api/rating', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataWithRating)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar avaliação.');
      }

      const responseData = await response.json();

      setRating(0);
      setName('');
      setComment('');
      reset();
      // Descomente a linha abaixo para ver a resposta da API após o envio bem-sucedido
      // console.log('Avaliação enviada com sucesso:', responseData);
    } catch (error) {
      console.error('Erro ao enviar avaliação:', error);
      setShowLoadingModal(false);
    } finally {
      setShowLoadingModal(false);
      setShowSuccessModal(true);

      setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000);
    }
  };


  const handleRating = (rate: number) => {
    setRating(rate);
    setIsNameValid(name.trim().length > 0 && rate > 0);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    setIsNameValid(newName.trim().length > 0 && rating > 0);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg bg-light-solid w-[390px] h-auto flex flex-col items-center justify-center p-6 shadow-lg">
        <Image
          className="w-20 h-9 mb-4"
          src="/serasa-logo-full.svg"
          alt="Logo"
          width={144}
          height={60}
          title={'Logo'}
          loading='eager'
        />
        <DynamicText ariaLabel="Deixe sua avaliação" level="3" title="Deixe sua avaliação" className="mb-4 text-center text-dark-high">
          Deixe sua avaliação
        </DynamicText>
        <DynamicText ariaLabel="Conte o quanto você está satisfeito com nossos serviços" level="p" title="Conte o quanto você está satisfeito com nossos serviços" className="mb-4 text-center text-dark-medium max-w-64">
          Conte o quanto você está satisfeito com nossos serviços
        </DynamicText>
        <DynamicText ariaLabel="Marque de 1 à 5 estrelas" level="p-bold" title="Marque de 1 à 5 estrelas" className="mb-2 text-center text-dark-high">
          Marque de 1 à 5 estrelas
        </DynamicText>
        <div className="flex justify-center items-center mb-4 gap-0">
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
        <div className="flex flex-col mb-4 w-full">
          <label className='body-bold mb-2'>Nome</label>
          <input
            {...register('name')}
            type="text"
            placeholder='Nome'
            className={`w-full p-3 border border-gray-300 ease duration-300 outline-magenta/0 outline outline-offset-0 outline-4 rounded-lg ${errors.name ? 'border-red-600 focus:outline-red-600/50 hover:border-red-600  ' : 'focus:outline-magenta/50 hover:border-magenta'}`}
            value={name}
            onChange={handleNameChange}
          />
          {errors.name && <span className="label ease duration-300 text-red-600 mt-2">{errors.name.message}</span>}
        </div>
        <div className="flex flex-col mb-4 w-full">
          <label className='body-bold mb-2'>Comentário (Opcional)</label>
          <input
            {...register('comment')}
            type="text"
            placeholder='Comentário (Opcional)'
            className={`w-full p-3 border border-gray-300 ease duration-300 outline-magenta/0 outline outline-offset-0 outline-4 rounded-lg ${errors.comment ? 'border-red-600 focus:outline-red-600/50 hover:border-red-600  ' : 'focus:outline-magenta/50 hover:border-magenta'}`}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {errors.comment && <span className="label ease duration-300 text-red-600 mt-2">{errors.comment.message}</span>}
        </div>
        <div className="text-center w-full">
          <button
            id="button"
            role="button"
            aria-label="Enviar avaliação"
            type="submit"
            className={`${isNameValid ? 'w-full p-3 bg-magenta/90 text-light-solid hover:bg-magenta' : 'w-full p-3 bg-light-light text-dark-low '} body-bold sease duration-300 outline-magenta/0 outline focus:outline-magenta/50 outline-offset-0 outline-4 rounded-lg`}
            disabled={!isNameValid}
          >
            Enviar avaliação
          </button>
        </div>
      </form>
      {showLoadingModal && <Modal type="loading" />}
      {showSuccessModal && <Modal type="success" />}
    </>
  );
};

export default Form;