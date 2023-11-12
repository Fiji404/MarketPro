import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { socket } from '@renderer/socket';

const NAV_LINKS = [
    {
        text: 'Statystyki',
        href: '/stats'
    }
];

export const Navbar = () => {
    useEffect(() => {
        socket.on('connect', () => {
            console.log('Client connected, ID:', socket.id);
        });
    }, []);
    return (
        <nav className="flex items-center justify-between text-accent h-16 px-6">
            <h1 className="text-xl font-extrabold text-foreground transition-colors">
                <Link to="/">MarketPro</Link>
            </h1>
            <ul className="py-2 flex justify-end gap-3">
                {NAV_LINKS.map(({ text, href }) => (
                    <li key={text}>
                        <Link to={href} className="text-base hover:text-foreground transition-colors">
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
