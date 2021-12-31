import Image from "next/image";

const Header = () => {
    return (
        <header className="bg-header-mobile sm:bg-header-desktop bg-no-repeat bg-cover bg-bottom flex flex-col items-center py-20 sm:py-40 -mb-10 sm:-mb-20">
            <Image
                src="/images/logo.svg"
                alt="logo"
                objectFit="contain"
                height={100}
                width={100}
            />
        </header>
    );
};

export default Header;
