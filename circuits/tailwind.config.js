/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.tsx",
    ],
    theme: {
        extend: {
            width: {
                '128': '32rem', 
                '144': '36rem',
                '150': '37.5rem',
                '160': '40rem',
            },
            gap: {
                '2.5': '0.625rem',
                '12.5': '3.125rem',
            },
            margin: {
                '10': '2.5rem',
                '12.5': '3.125rem',
            },
            screens: {
                '3xl': '1600px',
                '4xl': '1920px',
            },
        },
    },
    plugins: [],
}

