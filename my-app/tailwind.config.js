/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                250: "250px",
                500: "500px",
                600: "600px",
                800: "800px",
            },
            minHeight: {
                100: "100px",
                250: "250px",
                500: "500px",
                600: "600px",
                800: "800px",
            },
            height: {
                250: "250px",
            },
            colors: {
                purple: "#3f3cbb",
                primary: "#121023",
            },
        },
    },
    plugins: [require("daisyui")],
};
