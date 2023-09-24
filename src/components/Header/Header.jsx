import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <div>
            <img src="assets/logo.png" alt="logomarca" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/flavors">Sabores</Link>
                <Link to="/about">Sobre</Link>
            </nav>
        </div>
    </header>
);

export default Header;