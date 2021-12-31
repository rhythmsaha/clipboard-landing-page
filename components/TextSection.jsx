const TextSection = ({ heading, para, big, small }) => {
    return (
        <div>
            <h1
                className={`font-semibold text-neutral-dark-grayish-blue  ${
                    small ? "text-2xl " : "text-3xl "
                } ${
                    big
                        ? " lg:text-5xl"
                        : small
                        ? "lg:text-2xl"
                        : " lg:text-4xl"
                }`}
            >
                {heading}
            </h1>

            <p
                className={`text-neutral-grayish-blue  ${
                    !small ? "mt-4 lg:px-16" : "mt-2"
                }`}
            >
                {para}
            </p>
        </div>
    );
};

export default TextSection;
