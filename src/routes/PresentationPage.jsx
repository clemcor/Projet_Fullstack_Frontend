import Header from '../header/header';
import './presentationPage.css';

function PresentationPage() {
    const name = "Cordier Clément";
    const dateOfBirth = "01/04/2002";
    const age = calculateAge(dateOfBirth);
    const description = "Description de toi-même...";
    const githubLink = "https://github.com/clemcor";
    const photoPath = "/photoClement.png";

    function calculateAge(dateString) {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    return (
        <div className="presentation-page">
            <Header />
            <div className="presentation-content">
                <h1>Bienvenue sur ma page de présentation</h1>
                <div className="profile-info">
                    <div className="profile-image">
                        <img src={photoPath} alt="Photo de profil" />
                    </div>
                    <div className="profile-details">
                        <p><strong>Nom:</strong> {name}</p>
                        <p><strong>Date de naissance:</strong> {dateOfBirth}</p>
                        <p><strong>Âge:</strong> {age}</p>
                        <p><strong>Description:</strong> {description}</p>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <div className="githubImg">
                                <img src="/github.png" alt="GitHub" />
                                <a href="/email">
                                    <img src="/courrier.png" alt="contact" />
                                </a>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PresentationPage;
