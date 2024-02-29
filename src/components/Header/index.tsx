import Image from "next/image";

const Header = () => {
    return (
        <header className='bg-white flex items-center justify-center shadow'>
            <div className="container m-auto h-full w-full">
                <Image
                    className="w-36 h-14"
                    src="/serasa-logo-full.svg"
                    alt="serasa-logo"
                    width={144}
                    height={60}
                />
            </div>
        </header>
    );
};

export default Header;