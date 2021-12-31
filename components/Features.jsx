import Image from "next/image";
import TextSection from "./TextSection";

const Features = () => {
    return (
        <section className="mt-36">
            <div className="text-center lg:text-lg w-[85%] max-w-3xl mx-auto">
                <TextSection
                    heading="Keep track of your snippets "
                    para="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."
                />
            </div>

            <div className="mt-20 w-[82%] lg:w-full mx-auto lg:mx-0 lg:mr-auto lg:flex items-center gap-20">
                <img
                    src="/images/image-computer.png"
                    alt="computer"
                    className="object-contain w-full lg:-ml-8 lg:w-6/12"
                />

                <div className="text-center lg:text-left mt-16 lg:mt-0 space-y-10 justify-self-start max-w-xs mx-auto lg:mx-0">
                    <TextSection
                        small
                        heading="Quick Search"
                        para="Easily search your snippets by content, category, web address, application, and more."
                    />

                    <TextSection
                        small
                        heading="iCloud Sync"
                        para="Instantly saves and syncs snippets across all your devices."
                    />

                    <TextSection
                        small
                        heading="Complete History"
                        para="Retrieve any snippets from the first moment you started using the app."
                    />
                </div>
            </div>

            <div className="mt-32 w-[85%] max-w-3xl mx-auto ">
                <div className="text-center lg:text-lg">
                    <TextSection
                        heading="Access Clipboard anywhere"
                        para="Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
                    />
                </div>

                <div className="mt-16 w-full">
                    <img
                        src="/images/image-devices.png"
                        alt=""
                        className="object-contain w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
