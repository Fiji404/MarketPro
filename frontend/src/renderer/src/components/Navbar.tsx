import { Link } from 'react-router-dom';

const NAV_LINKS = [
    {
        text: 'Strona główna',
        href: '/'
    },
    {
        text: 'Statystyki',
        href: '/stats'
    },
    {
        text: 'Historia zakupów',
        href: '#'
    }
];

export const Navbar = () => {
    return (
        <nav>
            <ul className="p-2 flex justify-end gap-3">
                {NAV_LINKS.map(({ text, href }) => (
                    <li key={text}>
                        <Link className="nav-link" to={href}>
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
