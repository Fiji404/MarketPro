/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/renderer/src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                bgMain: '#000',
                bgSecondary: '#211F27',
                foreground: '#fff',
                accent: '#a1a1a1'
            }
        }
    },
    plugins: []
};
