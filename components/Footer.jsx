import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-50 mt-36 font-bai-jamjuree gap-10 lg:space-x-10 p-20 flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-start">
            <div className="py-12 lg:py-0">
                <Image
                    src="/images/logo.svg"
                    alt="logo"
                    objectFit="contain"
                    height={64}
                    width={64}
                />
            </div>

            <nav className="flex flex-col lg:flex-row lg:justify-start lg:space-x-8 flex-grow  text-lg tracking-widest space-y-4 lg:space-y-0">
                <div className="flex flex-col items-center lg:items-start space-y-4">
                    <span>FAQs</span>
                    <span>Contact Us</span>
                </div>

                <div className="flex flex-col items-center lg:items-start space-y-4">
                    <span>Privacy Policy</span>
                    <span>Press Kit</span>
                </div>

                <div className="flex flex-col items-center lg:items-start space-y-4">
                    <span>Install Guide</span>
                </div>
            </nav>

            <div className="flex items-center gap-8">
                <img src="/images/icon-facebook.svg" alt="" className="" />
                <img src="/images/icon-twitter.svg" alt="" />
                <img src="/images/icon-instagram.svg" alt="" />
            </div>
        </footer>
    );
};

export default Footer;
