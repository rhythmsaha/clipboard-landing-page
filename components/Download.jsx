import Button from "./Button";
import TextSection from "./TextSection";

const Download = () => {
    return (
        <section className="w-[85%] max-w-3xl mx-auto mt-36">
            <div className="text-center lg:text-lg ">
                <TextSection
                    heading=" Clipboard for iOS and Mac OS"
                    para="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard"
                />
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-4 justify-center">
                <Button text="Download for iOS" primary />
                <Button text="Download for Mac" />
            </div>
        </section>
    );
};

export default Download;
