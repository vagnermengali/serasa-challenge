import Image from "next/image";

const Footer = () => {
    return (
        <footer className='bg-zinc-50'>
            <div className="container m-auto py-12">
                <Image
                    className="w-60 h-24"
                    src="/serasa-logo-full.svg"
                    alt="serasa-logo"
                    width={240}
                    height={101}
                />
            </div>
        </footer>
    );
};

export default Footer;