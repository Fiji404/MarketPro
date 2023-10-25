import { useEffect } from 'react';
import { Navbar } from './components';

export const App = () => {
    useEffect(() => {
        const getInvoices = async () => {
            const res = await fetch('http://localhost:3000/invoices');
            const data = await res.json();
            console.log(data);
        };
        getInvoices();
    }, []);

    return (
        <>
            <Navbar />
            <h1 className="text-center mt-20 text-6xl font-bold">Witaj z powrotem!</h1>
        </>
    );
};
