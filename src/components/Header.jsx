import { useState } from "react";
import navigation from "../data/navigation";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={`header ${menuOpen ? "header--menu-open" : ""}`}>
            <div className="container">
                <a
                    href="/"
                    className="header__brand"
                    onClick={() => setMenuOpen(false)}
                >
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

                <button
                    className="header__menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                </button>
            </div>

            <nav className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}>
                {navigation.map((item) => (
                    <a
                        key={item.title}
                        href={item.path}
                        onClick={() => setMenuOpen(false)}
                    >
                        {item.title}
                    </a>
                ))}
            </nav>
        </header>
    );
}

export default Header;