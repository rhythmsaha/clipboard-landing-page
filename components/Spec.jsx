import TextSection from "./TextSection";

const Spec = ({ heading, para, icon }) => {
    return (
        <div className="flex flex-col items-center gap-8">
            <img src={icon} alt="" />

            <TextSection small heading={heading} para={para} />
        </div>
    );
};

export default Spec;
