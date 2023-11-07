import { PropsWithChildren, useEffect, useId, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

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
        <fieldset>
            <div className="relative before:absolute before:bottom-0 before:h-[2px] before:w-full before:scale-x-0 focus-within:before:bg-orange-400 focus-within:before:scale-x-100 flex flex-col before:transition-transform">
                <label
                    className={`absolute pointer-events-none ${
                        isInputFocused ? '-translate-y-5 scale-90' : ''
                    } transition-transform`}
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
                    className="border-b-2 focus:outline-none"
                    type={type || 'text'}
                    defaultValue={defaultValue || ''}
                />
            </div>
            {typeof errorName === 'string' && <p className="mt-1 text-red-600">{errorName}</p>}
        </fieldset>
    );
};
