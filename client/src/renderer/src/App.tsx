import { useEffect } from 'react';
import { Navbar } from './components';

export const App = () => {


    useEffect(() => {
        fetch("localhost:8080/invoices")
    })

    return (
        <>
            <Navbar />
            <h1 className="text-center mt-20 text-6xl font-bold">Witaj z powrotem!</h1>
        </>
    );
};
