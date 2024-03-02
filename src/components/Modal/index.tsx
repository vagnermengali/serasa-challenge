import Image from "next/image";
import { useEffect, useState } from "react";
import DynamicText from "@/components/Ui/DynamicText";

const Modal = ({ type }: { type: string }) => {
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showModal && (
                <div>
                    <div id="overlay" className="w-screen h-screen fixed inset-0 z-20 bg-light-solid bg-opacity-5 backdrop-blur-sm"></div>
                    <div id="modal" className="fixed inset-x-1/2 inset-y-1/2 z-30 -translate-x-2/4 -translate-y-2/4 rounded-lg bg-light-solid w-max flex flex-col items-center justify-center py-6 px-12 shadow-lg h-fit">
                        {type === "success" ? (
                            <>
                                <Image src="/favicon.webp" width={60} height={60} alt="Logo" className="contrast-0 mb-5" />
                                <DynamicText level="3" ariaLabel="Avaliação enviada com sucesso!" title="Avaliação enviada com sucesso!" className="mb-5 text-center">Avaliação enviada com sucesso!</DynamicText>
                                <DynamicText level="p" ariaLabel="Obrigado por avaliar nossos serviços" title="Estamos processando suas informações">Obrigado por avaliar nossos serviços</DynamicText>
                            </>
                        ) : (
                            <>
                                <Image src="/favicon.webp" width={60} height={60} alt="Logo" className="contrast-0 mb-5" />
                                <DynamicText level="3" ariaLabel="Aguarde..." title="Aguarde..." className="text-center">Aguarde...</DynamicText>
                                <DynamicText level="p" ariaLabel="Estamos processando suas informações" title="Estamos processando suas informações">Estamos processando suas informações</DynamicText>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
