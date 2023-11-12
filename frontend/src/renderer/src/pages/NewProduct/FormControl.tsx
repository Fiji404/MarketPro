import { PropsWithChildren, useEffect, useId, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface Props {
    type?: string;
    fieldId: string;
    defaultValue?: string;
}

export const FormControl = ({ children, type, fieldId, defaultValue }: Props & PropsWithChildren) => {
    const {
        register,
        formState: { errors }
    } = useFormContext();
    const { ref, onBlur, ...handlers } = register(fieldId);
    const id = useId();
    const [isInputFocused, setIsInputFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const focusInputHandler = () => {
        setIsInputFocused(true);
    };

    const blurInputHandler = () => {
        if (inputRef.current?.value !== '') return;
        setIsInputFocused(false);
    };

    const errorName = errors[fieldId]?.message;

    useEffect(() => {
        if (inputRef.current?.value !== '') setIsInputFocused(true);
    }, []);

    return (
        <div>
            <div className="relative border-b border-b-transparent focus-within:border-b-green-500 flex flex-col justify-start transition-colors rounded-md">
                <label
                    className={twMerge(
                        `absolute top-1/2 indent-1 -translate-y-1/2 font-medium pointer-events-none ${
                            isInputFocused ? '-translate-y-10 scale-90' : ''
                        } text-foreground transition-transform`
                    )}
                    htmlFor={id}
                >
                    {children}
                </label>
                <input
                    {...handlers}
                    ref={e => {
                        ref(e);
                        inputRef.current = e;
                    }}
                    onFocus={() => {
                        focusInputHandler();
                    }}
                    onBlur={e => {
                        blurInputHandler();
                        onBlur(e);
                    }}
                    id={id}
                    className="focus:outline-none card text-foreground min-h-[40px] indent-1 rounded-md"
                    type={type || 'text'}
                    defaultValue={defaultValue || ''}
                />
            </div>
            {typeof errorName === 'string' && <p className="mt-1 text-red-600">{errorName}</p>}
        </div>
    );
};
