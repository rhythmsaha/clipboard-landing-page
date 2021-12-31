const Button = ({ text, onClick, primary }) => {
    return (
        <button
            className={`${
                primary ? "bg-primary-strong-cyan" : "bg-primary-light-blue"
            }  text-white text-lg px-4 py-3  tracking-wider rounded-full w-full lg:w-56`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
