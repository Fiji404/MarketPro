import { socket } from '@renderer/socket';
import { useEffect, useState } from 'react';

interface Product {
    id: number;
    name: string;
    quantity: string;
    netPrice: string;
}

export const Stats = () => {
    const [products, setProducts] = useState<Product[]>();
    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch('http://0.0.0.0:3000/products');
            const data = await res.json();
            setProducts(data);
            console.log(data);
        };
        getProducts();

        socket.on('add-product', getProducts);
    }, []);

    return (
        <main className='px-6'>
            <h1 className="mt-5 text-3xl font-extrabold text-foreground text-center">
                Oto lista wszystkich zakupionych produktów
            </h1>
            <table className="block mt-8 px-1">
                <tbody className="flex flex-col gap-1">
                    <tr className="flex justify-between text-foreground">
                        <th className="text-left basis-7 grow" scope="col">
                            Produkt
                        </th>
                        <th className="text-left basis-7 grow" scope="col">
                            Ilość
                        </th>
                        <th className="text-left basis-7 grow" scope="col">
                            Cena
                        </th>
                    </tr>
                    {products &&
                        products.map(product => {
                            return (
                                <tr className="flex gap-1 justify-between mb-1 card" key={product.id}>
                                    <td className="product-detail border-r border-[rgba(255,255,255,0.2)]">{product.name}</td>
                                    <td className="product-detail border-r border-[rgba(255,255,255,0.2)]">{product.quantity}</td>
                                    <td className="product-detail">{product.netPrice}zł</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </main>
    );
};
