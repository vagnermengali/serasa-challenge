import DynamicText from "@/components/Ui/DynamicText";
import DynamicLink from "@/components/Ui/Link";

const Footer = () => {
    return (
        <footer className='bg-zinc-50  mt-auto'>
            <div className="container mx-auto py-4 flex flex-col justify-center items-center gap-2">
                <DynamicText level="p" title="Texto Footer" ariaLabel="Texto Footer" className="text-dark-high">Nós protegemos a sua privacidade ❤</DynamicText>
                <DynamicLink href="https://www.serasa.com.br/politicas-do-site" level="p-bold" ariaLabel="Link Footer" className="text-magenta" title="Link Footer" >Termos de uso e privacidade</DynamicLink>
            </div>
        </footer>
    );
};

export default Footer;          