import navigation from "../data/navigation";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <a href="/" className="header__brand">
                    <span className="header__firstname">Therese</span>
                    <span className="header__lastname">Broback</span>
                </a>

                <nav className="header__nav">
                    {navigation.map((item) => (
                        <a key={item.title} href={item.path}>
                            {item.title}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;