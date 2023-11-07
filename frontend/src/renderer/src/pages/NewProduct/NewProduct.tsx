import { FormControl } from './FormControl';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type FormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
    name: z.string().min(1, { message: 'Nazwa produktu jest wymagana' }),
    quantity: z.string().min(1, { message: 'Ilość zakupionych produktów jest wymagana' }),
    netPrice: z.string().min(1, { message: 'Cena netto jest wymagana' }),
    vatRate: z.string()
});

const FORM_FIELDS = [
    { name: 'Nazwa', fieldId: 'name' },
    { name: 'Ilość', type: 'number', fieldId: 'quantity' },
    { name: 'Cena netto (w zł)', fieldId: 'netPrice' },
    { name: 'Stawka VAT', fieldId: 'vatRate', defaultValue: '23%' }
];

export const NewProduct = () => {
    const methods = useForm<FormSchema>({ resolver: zodResolver(formSchema) });
    const formSubmitHandler = ({ vatRate, ...fieldValues }: FormSchema) => {
        window.close();
        // fetch('http://0.0.0.0:3000/products', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(fieldValues)
        // });
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(formSubmitHandler)} className="mt-7 flex flex-col p-3 gap-7">
                {FORM_FIELDS.map(field => (
                    <FormControl {...field} key={field.name}>
                        {field.name}
                    </FormControl>
                ))}
                <button className="w-full bg-green-500 py-2 rounded-md text-xl font-semibold border border-green-600 hover:scale-95 transition-transform">
                    Dodaj
                </button>
            </form>
        </FormProvider>
    );
};
