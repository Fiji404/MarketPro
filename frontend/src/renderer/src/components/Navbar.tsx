import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between text-accent h-16 px-6">
            <h1 className="text-xl font-extrabold text-foreground transition-colors">
                <Link to="/">MarketPro</Link>
            </h1>
            <ul className="py-2 flex justify-end gap-3">
                <li>
                    <Link to="/stats" className="text-base hover:text-foreground transition-colors">
                        Statystyki
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
