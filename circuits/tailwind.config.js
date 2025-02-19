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
                '176': '44rem',
                '192': '48rem',
                '208': '52rem',
            },
            height: {
                '128': '32rem', 
                '144': '36rem',
                '150': '37.5rem',
                '160': '40rem',
                '176': '44rem',
                '192': '48rem',
                '208': '52rem',
            },
            gap: {
                '2.5': '0.625rem',
                '12.5': '3.125rem',
            },
            padding: {
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
            fontSize: {
                '8.5xl': ['7', { lineHeight: '1rem' }],
                '10xl': ['10', { lineHeight: '1rem' }]
            }
        }
    },
    plugins: [],
}

