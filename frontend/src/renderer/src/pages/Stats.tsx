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
        };
        getProducts();

        socket.on('add-product', getProducts);
    }, []);

    return (
        <>
            <h1 className="mt-5 text-3xl font-bold text-center">Oto lista wszystkich zakupionych produktów</h1>
            <table className="block mt-5 px-1">
                <tbody className="flex flex-col">
                    <tr className="flex justify-between">
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
                                <tr className="flex justify-between border rounded-sm mb-1" key={product.id}>
                                    <td className="product-detail border-r">{product.name}</td>
                                    <td className="product-detail border-r">{product.quantity}</td>
                                    <td className="product-detail">{product.netPrice}zł</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};
