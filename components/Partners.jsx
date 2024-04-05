import Image from "next/image";

const Partners = () => {
    return (
        <section className="mt-28 w-[85%] max-w-6xl mx-auto grid lg:grid-cols-5 place-items-center gap-16">
            <img
                src="/images/logo-google.png"
                alt="google"
                objectFit="contain"
                className="object-contain"
                height={49}
                width={165}
            />
            <img
                src="/images/logo-ibm.png"
                alt="ibm"
                objectFit="contain"
                className="object-contain"
                height={49}
                width={165}
            />
            <img
                src="/images/logo-microsoft.png"
                alt="microsoft"
                objectFit="contain"
                className="object-contain"
                height={49}
                width={165}
            />
            <img
                src="/images/logo-hp.png"
                alt="hp"
                objectFit="contain"
                className="object-contain"
                height={49}
                width={165}
            />
            <img
                src="/images/logo-vector-graphics.png"
                alt="vector"
                objectFit="contain"
                className="object-contain"
                height={49}
                width={165}
            />
        </section>
    );
};

export default Partners;
