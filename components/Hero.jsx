import TextSection from "./TextSection";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="w-[85%] max-w-3xl mx-auto">
            <div className="text-center lg:text-lg ">
                <TextSection
                    big
                    heading="A history of everything you copy"
                    para="Clipboard allows you to track and organize everything you copy.
                Instantly access your clipboard on all your devices."
                />
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-4 justify-center">
                <Button text="Download for iOS" primary />
                <Button text="Download for Mac" />
            </div>
        </section>
    );
};

export default Hero;
