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
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            purple: "#3f3cbb",
            primary: "#121023",
        },
    },
    plugins: [require("daisyui")],
};
