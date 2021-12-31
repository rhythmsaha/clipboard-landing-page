import Spec from "./Spec";
import TextSection from "./TextSection";

const Specs = () => {
    return (
        <section className="mt-28 w-[85%] max-w-3xl mx-auto ">
            <div className="text-center lg:text-lg">
                <TextSection
                    heading="Supercharge your workflow"
                    para="We’ve got the tools to boost your productivity."
                />
            </div>

            <div className="text-center mt-16 py-8 grid lg:grid-cols-3 gap-16">
                <Spec
                    heading="Create blacklists"
                    para="Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
                    icon="/images/icon-blacklist.svg"
                />
                <Spec
                    heading="Plain text snippets"
                    para="Remove unwanted formatting from copied text for a consistent look."
                    icon="/images/icon-text.svg"
                />
                <Spec
                    heading="Sneak preview"
                    para="Quick preview of all snippets on your Clipboard for easy access."
                    icon="/images/icon-preview.svg"
                />
            </div>
        </section>
    );
};

export default Specs;
