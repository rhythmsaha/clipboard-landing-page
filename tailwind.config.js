module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "bai-jamjuree": ["bai jamjuree", "sans-serif"],
            },

            backgroundImage: {
                "header-desktop": "url('/images/bg-header-desktop.png')",
                "header-mobile": "url('/images/bg-header-mobile.png')",
            },

            colors: {
                primary: {
                    "strong-cyan": "hsl(171, 66%, 44%)",
                    "light-blue": "hsl(233, 100%, 69%)",
                },
                neutral: {
                    "dark-grayish-blue": "hsl(210, 10%, 33%)",
                    "grayish-blue": "hsl(201, 11%, 66%)",
                },
            },
        },
    },
    plugins: [],
};
