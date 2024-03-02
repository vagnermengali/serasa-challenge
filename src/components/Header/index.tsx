import Image from "next/image";
import DynamicLink from "@/components/Ui/DynamicLink";

const Header = () => {
    return (
        <header className='bg-white shadow'>
            <div className="container mx-auto h-full w-full py-6 flex items-center justify-center">
                <DynamicLink level="image" href="/" title="Ir para página inicial" ariaLabel="Ir para página inicial">
                    <Image
                        className="w-28 h-11"
                        src="/serasa-logo-full.svg"
                        alt="Ir para página inicial"
                        width={144}
                        height={60}
                        title={'Ir para página inicial'}
                    />
                </DynamicLink>
            </div>
        </header>
    );
};

export default Header;
