import { useEffect, useState } from 'react';

interface ProductsStats {
    bestSellingProduct: {
        name: string;
        quantity: number;
    };
}

export const Home = () => {
    const [productsStats, setProductsStats] = useState<ProductsStats | null>(null);

    useEffect(() => {
        const getProductsStats = async () => {
            const res = await fetch('http://0.0.0.0:3000/stats');
            const productsStats = await res.json();
            setProductsStats(productsStats);
        };
        getProductsStats();
    }, []);

    return (
        <main className="px-6">
            {productsStats && (
                <section className="mt-10 text-textHover card max-w-sm py-2 px-4">
                    <h2 className="text-2xl text-center font-bold text-foreground">
                        Najlepiej sprzedający się produkt
                    </h2>
                    <p className="text-center">{productsStats.bestSellingProduct.name}</p>
                    <p className="text-2xl text-center">{productsStats.bestSellingProduct.quantity}</p>
                </section>
            )}
        </main>
    );
};
