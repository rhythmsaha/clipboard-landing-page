import Image from "next/image";

const Partners = () => {
    return (
        <section className="mt-28 w-[85%] max-w-6xl mx-auto grid lg:grid-cols-5 place-items-center gap-16">
            <Image
                src="/images/logo-google.png"
                alt="google"
                objectFit="contain"
                height={49}
                width={165}
            />
            <Image
                src="/images/logo-ibm.png"
                alt="ibm"
                objectFit="contain"
                height={49}
                width={165}
            />
            <Image
                src="/images/logo-microsoft.png"
                alt="microsoft"
                objectFit="contain"
                height={49}
                width={165}
            />
            <Image
                src="/images/logo-hp.png"
                alt="hp"
                objectFit="contain"
                height={49}
                width={165}
            />
            <Image
                src="/images/logo-vector-graphics.png"
                alt="vector"
                objectFit="contain"
                height={49}
                width={165}
            />
        </section>
    );
};

export default Partners;
