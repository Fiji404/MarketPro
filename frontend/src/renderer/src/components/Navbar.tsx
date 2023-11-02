export const Navbar = () => {
    return (
        <nav>
            <ul className="p-2 flex justify-end gap-3">
                <li>
                    <a className="nav-link" href="#">
                        Strona główna
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#">
                        Produkty
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#">
                        Historia zakupów
                    </a>
                </li>
            </ul>
        </nav>
    );
};
