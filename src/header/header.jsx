
import './header.css';
const Header = () => {
    return (
        <div className="app">
        <header>
            <div className="left">
                <a href="/presentation">
                <img src="/photoClement.png" alt="Photho" />
                </a>
            </div>
            
            <div className="right">
                
            <a href="/projects">
                <img src="/accueil.png" alt="Logo Connexion" />
            </a>
            
            </div>
        </header>
        </div>
    );
};

export default Header;