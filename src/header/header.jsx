
import './header.css';
const Header = () => {
    return (
        <header>
            <div className="left">
                <img src="chemin_vers_la_photo" alt="Photho" />
            </div>
            <div className="right">
                <img src="chemin_vers_le_logo" alt="Logo Connexion" />
            </div>
        </header>
    );
};

export default Header;